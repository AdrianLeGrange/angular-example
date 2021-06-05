import { PluginType } from "../enums";

export interface Port {
    number: number,
    allowedPlugins: PluginType[]
}