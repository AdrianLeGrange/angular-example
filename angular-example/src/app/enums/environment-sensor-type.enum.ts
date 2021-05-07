export enum EnvironmentSensorType {
    STANDARD = 0,
    CO2     = 1,
    FLOW = 2

}

export const EnvironmentSensorTypeDescriptions = new Map<EnvironmentSensorType, string>([
    [EnvironmentSensorType.STANDARD, 'Standard'],
    [EnvironmentSensorType.CO2, 'Co2'],
    [EnvironmentSensorType.FLOW, 'Flow'],
]);