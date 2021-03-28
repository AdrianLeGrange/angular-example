export enum AirFlowUnit {
    CFM = 0,
    CMH = 1,
}

export const AirFlowUnitDescriptions = new Map<AirFlowUnit, string>([
    [AirFlowUnit.CFM, 'CFM'],
    [AirFlowUnit.CMH, 'CMH'],
]);