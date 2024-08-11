"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$pitch",
    description: "Sets the pitch for the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to set pitch for.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        },
        {
            name: "pitch",
            description: "The pitch to set.",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [guild, pitch]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        try {
            await player.setFilters({ pitch });
            return this.success();
        }
        catch (error) {
            return this.customError("Failed to set pitch.");
        }
    }
});
//# sourceMappingURL=lavalinkPitch.js.map