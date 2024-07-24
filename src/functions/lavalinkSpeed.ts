import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$speed",
    description: "Sets the playback speed for the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to set playback speed for.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "speed",
            description: "The playback speed to set.",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [guild, speed]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        try {
            await player.setFilters({ speed });
            return this.success();
        } catch (error) {
            return this.customError("Failed to set playback speed.");
        }
    }
});
