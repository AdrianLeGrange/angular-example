export enum AirFlowRate {
    CFM = 0,
    CMH = 1,
}

export const AirFlowRateDescriptions = new Map<AirFlowRate, string>([
    [AirFlowRate.CFM, 'CFM'],
    [AirFlowRate.CMH, 'CMH'],
]);