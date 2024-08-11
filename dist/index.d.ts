import { ForgeClient, ForgeExtension } from "@tryforge/forgescript";
import { Manager } from "lavacord";
import { LavalinkNodeOptions } from "lavacord";
import { LavalinkCommandManager } from "./structures/LavalinkCommandManager";
export interface ILavaForgeOptions {
    clientId: string;
    nodes: LavalinkNodeOptions[];
}
export declare class LavaForge extends ForgeExtension {
    readonly options: ILavaForgeOptions;
    static Instance: LavaForge;
    name: string;
    description: string;
    version: string;
    commands: LavalinkCommandManager;
    client: ForgeClient;
    manager: Manager;
    constructor(options: ILavaForgeOptions);
    init(client: ForgeClient): void;
}
//# sourceMappingURL=index.d.ts.map