export enum PluginType {
    Standard = 0,
    CO2 = 1,
    Flow = 2
}

export const PluginTypeDescriptions = new Map<PluginType, string>([
    [PluginType.Standard, 'Standard'],
    [PluginType.CO2, 'CO2'],
    [PluginType.Flow, 'Flow'],
]); 