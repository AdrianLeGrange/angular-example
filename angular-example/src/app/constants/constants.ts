import { PluginType } from "../enums";
import { Port } from "../models/port.model";

export class Constants {
    public static NoMappedDescriptionMessage = "<No Description Found>";
    //public static BaseURL = "http://192.168.0.105/";
    //public static BaseURL = "https://api.thecatapi.com/";
    public static Ports: Port[] = [
        {
            number: 1,
            allowedPlugins: [PluginType.CO2, PluginType.Flow],
        },
        {
            number: 2,
            allowedPlugins: [PluginType.CO2],
        },
        {
            number: 3,
            allowedPlugins: [PluginType.Standard, PluginType.Flow],
        }
    ]
}