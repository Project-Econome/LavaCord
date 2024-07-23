import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$play",
    description: "Plays a track in the queue.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to play track in.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "track",
            description: "The track to play (as JSON string).",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [guild, track]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        try {
            const trackObj = JSON.parse(track);
            await player.play(trackObj);
            return this.success();
        } catch (error) {
            return this.customError("Failed to play track.");
        }
    }
});
