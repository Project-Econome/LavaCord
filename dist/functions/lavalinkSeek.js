"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$seek",
    description: "Seeks to a specific position in the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to seek in.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        },
        {
            name: "position",
            description: "The position to seek to (in milliseconds).",
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [guild, position]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player || !player.playing)
            return this.customError("No track is currently playing.");
        try {
            await player.seek(position);
            return this.success();
        }
        catch (error) {
            return this.customError("Failed to seek.");
        }
    }
});
//# sourceMappingURL=lavalinkSeek.js.map