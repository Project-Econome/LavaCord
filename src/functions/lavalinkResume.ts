import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$resume",
    description: "Resumes the currently paused track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to resume playback in.",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    async execute(ctx, [guild]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player || player.playing) return this.customError("Player is not paused.");

        player.pause(false);
        return this.success();
    }
});
