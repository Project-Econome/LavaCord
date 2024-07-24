import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$applyFilters",
    description: "Applies audio filters to the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to apply filters in.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "filters",
            description: "The filters to apply (as JSON string).",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [guild, filters]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        try {
            const filterObj = JSON.parse(filters);
            await player.setFilters(filterObj);
            return this.success();
        } catch (error) {
            return this.customError("Failed to apply filters.");
        }
    }
});
