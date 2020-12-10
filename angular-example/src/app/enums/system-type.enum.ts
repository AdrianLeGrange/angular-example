export enum SystemType {
    IndoorTent = 0,
    IndoorTentWithExaust = 1,
    Greenhouse = 2,
}

export const SystemTypeDescription = new Map<SystemType, string>([
    [SystemType.IndoorTent, 'Indoor Tent'],
    [SystemType.IndoorTentWithExaust, 'Indoor Tent With Exaust'],
    [SystemType.Greenhouse, 'Greenhouse'],
]);