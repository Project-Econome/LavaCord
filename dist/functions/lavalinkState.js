"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$state",
    description: "Gets the state of the player.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get player state from.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        return this.successJSON({
            playing: player.playing,
            paused: player.paused,
            position: player.position,
            volume: player.volume
        });
    }
});
//# sourceMappingURL=lavalinkState.js.map