import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$tracks",
    description: "Gets a list of all tracks in the queue.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get tracks from.",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        const tracks = player.queue.map(track => ({
            title: track.title,
            uri: track.uri,
            duration: track.duration
        }));

        return this.successJSON({ tracks });
    }
});
