"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LavaForge = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const lavacord_1 = require("lavacord");
const LavalinkCommandManager_1 = require("./structures/LavalinkCommandManager");
class LavaForge extends forgescript_1.ForgeExtension {
    constructor(options) {
        super();
        this.options = options;
        this.name = "LavaForge";
        this.description = "Very efficient Lavalink wrapper for Forge";
        this.version = "1.0.0";
    }
    init(client) {
        this.commands = new LavalinkCommandManager_1.LavalinkCommandManager(client);
        // Load events
        forgescript_1.EventManager.load("lavalink", `${__dirname}/events`);
        // Load functions
        forgescript_1.FunctionManager.load(`${__dirname}/functions`);
        // Convenience
        this.client = client;
        this.manager = new lavacord_1.Manager(this.options.nodes, {
            user: this.options.clientId,
            shards: 1 // Update this according to your shard count
        });
        client.lavalink = this;
        LavaForge.Instance = this;
        // @ts-ignore
        client.on('raw', d => this.manager.updateVoiceState(d));
        // Connect lavalink nodes
        this.manager.connect();
    }
}
exports.LavaForge = LavaForge;
