export enum PluginType {
    STANDARD = 0,
    CO2     = 1,
    FLOW = 2

}

export const PluginTypeDescriptions = new Map<PluginType, string>([
    [PluginType.STANDARD, 'Standard'],
    [PluginType.CO2, 'Co2'],
    [PluginType.FLOW, 'Flow'],
]); 