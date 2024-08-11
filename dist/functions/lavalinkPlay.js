"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$play",
    description: "Plays a track in the queue.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to play track in.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        },
        {
            name: "track",
            description: "The track to play (as JSON string).",
            rest: false,
            type: forgescript_1.ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [guild, track]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        try {
            const trackObj = JSON.parse(track);
            await player.play(trackObj);
            return this.success();
        }
        catch (error) {
            return this.customError("Failed to play track.");
        }
    }
});
//# sourceMappingURL=lavalinkPlay.js.map