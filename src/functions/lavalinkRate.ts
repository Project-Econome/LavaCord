import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$rate",
    description: "Sets the playback rate for the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to set playback rate for.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "rate",
            description: "The playback rate to set.",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [guild, rate]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        try {
            await player.setFilters({ rate });
            return this.success();
        } catch (error) {
            return this.customError("Failed to set playback rate.");
        }
    }
});
