import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$pitch",
    description: "Sets the pitch for the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to set pitch for.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "pitch",
            description: "The pitch to set.",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [guild, pitch]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        try {
            await player.setFilters({ pitch });
            return this.success();
        } catch (error) {
            return this.customError("Failed to set pitch.");
        }
    }
});
