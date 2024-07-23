import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$pause",
    description: "Pauses the currently playing track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to pause playback in.",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    async execute(ctx, [guild]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player || !player.playing) return this.customError("No track is currently playing.");

        player.pause(true);
        return this.success();
    }
});
