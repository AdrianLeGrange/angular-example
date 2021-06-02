import { PluginType } from "src/app/enums";

export interface PluginModuleType {
    description: string;
    type: PluginType;
    port: number;
}