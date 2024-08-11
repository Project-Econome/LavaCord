"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$resume",
    description: "Resumes the currently paused track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to resume playback in.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        }
    ],
    async execute(ctx, [guild]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player || player.playing)
            return this.customError("Player is not paused.");
        player.pause(false);
        return this.success();
    }
});
//# sourceMappingURL=lavalinkResume.js.map