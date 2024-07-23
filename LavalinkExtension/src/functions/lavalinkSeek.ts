import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$seek",
    description: "Seeks to a specific position in the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to seek in.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "position",
            description: "The position to seek to (in milliseconds).",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [guild, position]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player || !player.playing) return this.customError("No track is currently playing.");

        try {
            await player.seek(position);
            return this.success();
        } catch (error) {
            return this.customError("Failed to seek.");
        }
    }
});
