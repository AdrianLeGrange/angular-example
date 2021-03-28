export enum HydroEnvironment{
    INDOOR_TENT_CARBON_FILTER = 0,
    INDOOR_TENT_OUTOOR_EXHAUST = 1,
    INDOOR_TENT_OUTDOOR_INNTAKE_EXHAUST = 2,
    GREENHOUSE = 3,
}

export const HydroEnvironmentDescriptions = new Map<HydroEnvironment, string>([
    [HydroEnvironment.INDOOR_TENT_CARBON_FILTER, 'Indoor Tent With Carbon Filter'],
    [HydroEnvironment.INDOOR_TENT_OUTOOR_EXHAUST, 'Indoor_Tent With Outdoor Exhaust'],
    [HydroEnvironment.INDOOR_TENT_OUTDOOR_INNTAKE_EXHAUST, 'Indoor Tent With Outdoor intake & Exhaust'],
    [HydroEnvironment.GREENHOUSE, 'Greenhouse'],
]);