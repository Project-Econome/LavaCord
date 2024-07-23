import { EventManager, ForgeClient, ForgeExtension, FunctionManager } from "@tryforge/forgescript";
import { Manager } from "lavacord";
import { LavalinkNodeOptions } from "lavacord";
import { LavalinkCommandManager } from "./structures/LavalinkCommandManager";

export interface ILavaForgeOptions {
    clientId: string;
    nodes: LavalinkNodeOptions[];
}

export class LavaForge extends ForgeExtension {
    public static Instance: LavaForge;

    name = "LavaForge";
    description = "Lavalink wrapper for Forge";
    version = "1.0.0";

    public commands!: LavalinkCommandManager;
    public client!: ForgeClient;
    public manager!: Manager;

    public constructor(public readonly options: ILavaForgeOptions) {
        super();
    }

    init(client: ForgeClient): void {
        this.commands = new LavalinkCommandManager(client);

        // Load events
        EventManager.load("lavalink", `${__dirname}/events`);
        
        // Load functions
        FunctionManager.load(`${__dirname}/functions`);

        // Convenience
        this.client = client;
        this.manager = new Manager(this.options.nodes, {
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
