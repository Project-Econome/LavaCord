import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$trackInfo",
    description: "Gets information about a specific track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get track info from.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "track",
            description: "The track ID to get information for.",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [guild, trackId]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        const track = player.queue.find(t => t.id === trackId);
        if (!track) return this.customError("Track not found.");

        return this.successJSON({
            title: track.title,
            uri: track.uri,
            duration: track.duration
        });
    }
});
