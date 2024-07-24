import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$search",
    description: "Searches for tracks using the specified query.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to perform search in.",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "query",
            description: "The search query.",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [guild, query]) {
        const player = LavaForge.Instance.manager.players.get(guild.id);
        if (!player) return this.customError("No player found for this guild.");

        try {
            const results = await LavaForge.Instance.manager.search(query);
            return this.successJSON(results);
        } catch (error) {
            return this.customError("Search failed.");
        }
    }
});
