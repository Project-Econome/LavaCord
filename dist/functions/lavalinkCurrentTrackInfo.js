"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$currentTrackInfo",
    description: "Gets information about the currently playing track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get track info from.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player || !player.queue.current)
            return this.customError("No track is currently playing.");
        const track = player.queue.current;
        return this.successJSON({
            title: track.title,
            uri: track.uri,
            duration: track.duration,
            position: player.position
        });
    }
});
//# sourceMappingURL=lavalinkCurrentTrackInfo.js.map