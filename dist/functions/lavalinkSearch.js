"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$search",
    description: "Searches for tracks using the specified query.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild",
            description: "The guild to perform search in.",
            rest: false,
            type: forgescript_1.ArgType.Guild,
            required: true
        },
        {
            name: "query",
            description: "The search query.",
            rest: false,
            type: forgescript_1.ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [guild, query]) {
        const player = __1.LavaForge.Instance.manager.players.get(guild.id);
        if (!player)
            return this.customError("No player found for this guild.");
        try {
            const results = await __1.LavaForge.Instance.manager.search(query);
            return this.successJSON(results);
        }
        catch (error) {
            return this.customError("Search failed.");
        }
    }
});
//# sourceMappingURL=lavalinkSearch.js.map