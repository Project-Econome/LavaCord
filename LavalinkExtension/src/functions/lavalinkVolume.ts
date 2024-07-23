import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$volume",
    description: "Sets the volume of the current track.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to set volume for.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "volume",
            description: "The volume to set (0-100).",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [guild, volume]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        try {
            await player.setVolume(volume);
            return this.success();
        } catch (error) {
            return this.customError("Failed to set volume.");
        }
    }
});
