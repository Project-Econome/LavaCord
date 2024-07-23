import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$skip",
    description: "Skips to the next track in the queue.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to skip track in.",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    async execute(ctx, [guild]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        try {
            await player.skip();
            return this.success();
        } catch (error) {
            return this.customError("Failed to skip track.");
        }
    }
});
