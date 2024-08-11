"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$applyFilters",
    description: "Applies audio filters to the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to apply filters in.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        },
        {
            name: "filters",
            description: "The filters to apply (as JSON string).",
            rest: false,
            type: forgescript_1.ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [guild, filters]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        try {
            const filterObj = JSON.parse(filters);
            await player.setFilters(filterObj);
            return this.success();
        }
        catch (error) {
            return this.customError("Failed to apply filters.");
        }
    }
});
//# sourceMappingURL=lavalinkApplyFilters.js.map