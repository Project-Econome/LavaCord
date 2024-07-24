import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$currentTrackInfo",
    description: "Gets information about the currently playing track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get track info from.",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player || !player.queue.current) return this.customError("No track is currently playing.");

        const track = player.queue.current;
        return this.successJSON({
            title: track.title,
            uri: track.uri,
            duration: track.duration,
            position: player.position
        });
    }
});
