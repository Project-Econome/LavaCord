"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$stop",
    description: "Stops playback and clears the queue.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to stop playback in.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        }
    ],
    async execute(ctx, [guild]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        try {
            await player.stop();
            return this.success();
        }
        catch (error) {
            return this.customError("Failed to stop playback.");
        }
    }
});
//# sourceMappingURL=lavalinkStop.js.map