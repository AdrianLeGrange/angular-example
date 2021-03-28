export enum MainsVoltage {
    VAC220 = 0,
    VAC110 = 1,
}

export const MainsVoltageDescriptions = new Map<MainsVoltage, string>([
    [MainsVoltage.VAC220, '220Vac'],
    [MainsVoltage.VAC110, '110Vac'],
]);