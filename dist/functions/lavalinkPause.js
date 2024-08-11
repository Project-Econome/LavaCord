"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$pause",
    description: "Pauses the currently playing track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to pause playback in.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        }
    ],
    async execute(ctx, [guild]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player || !player.playing)
            return this.customError("No track is currently playing.");
        player.pause(true);
        return this.success();
    }
});
//# sourceMappingURL=lavalinkPause.js.map