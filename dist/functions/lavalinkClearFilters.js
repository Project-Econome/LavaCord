"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$clearFilters",
    description: "Clears all audio filters.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to clear filters from.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        }
    ],
    async execute(ctx, [guild]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        try {
            await player.setFilters({});
            return this.success();
        }
        catch (error) {
            return this.customError("Failed to clear filters.");
        }
    }
});
//# sourceMappingURL=lavalinkClearFilters.js.map