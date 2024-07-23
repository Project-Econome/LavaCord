import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$position",
    description: "Gets the current playback position.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get playback position from.",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player || !player.playing) return this.customError("No track is currently playing.");

        return this.successJSON({ position: player.position });
    }
});
