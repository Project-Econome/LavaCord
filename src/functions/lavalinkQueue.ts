import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$queue",
    description: "Returns JSON format of all tracks in the queue.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to pull queue from.",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        const queue = player.queue.map(track => ({
            title: track.title,
            uri: track.uri,
            duration: track.duration
        }));

        return this.successJSON({ queue });
    }
});
