export enum LengthUnit {
    M = 0,
    FT = 1,
}

export const LengthUnitDescriptions = new Map<LengthUnit, string>([
    [LengthUnit.M, 'Meter'],
    [LengthUnit.FT, 'Feet'],
]);