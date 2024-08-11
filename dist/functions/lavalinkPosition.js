"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$position",
    description: "Gets the current playback position.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get playback position from.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player || !player.playing)
            return this.customError("No track is currently playing.");
        return this.successJSON({ position: player.position });
    }
});
//# sourceMappingURL=lavalinkPosition.js.map