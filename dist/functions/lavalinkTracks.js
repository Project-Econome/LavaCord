"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$tracks",
    description: "Gets a list of all tracks in the queue.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get tracks from.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        const tracks = player.queue.map(track => ({
            title: track.title,
            uri: track.uri,
            duration: track.duration
        }));
        return this.successJSON({ tracks });
    }
});
//# sourceMappingURL=lavalinkTracks.js.map