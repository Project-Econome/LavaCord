import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$state",
    description: "Gets the state of the player.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to get player state from.",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    execute(ctx, [guild]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        return this.successJSON({
            playing: player.playing,
            paused: player.paused,
            position: player.position,
            volume: player.volume
        });
    }
});
