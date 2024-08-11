"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$speed",
    description: "Sets the playback speed for the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to set playback speed for.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        },
        {
            name: "speed",
            description: "The playback speed to set.",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [guild, speed]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        try {
            await player.setFilters({ speed });
            return this.success();
        }
        catch (error) {
            return this.customError("Failed to set playback speed.");
        }
    }
});
//# sourceMappingURL=lavalinkSpeed.js.map