export enum HydroSystem{
    EBB_FLOW = 0,
    NUTRIENT_FILM = 1,
    DRIP = 2,
    AERATED_FLOW = 3,
    DEEP_FLOW = 4,
    STATIC_AERATED = 5,
    ROOT_MIST = 6,
    FOG_FEED = 7,
    WICK = 8,
}

export const HydroSystemDescriptions = new Map<HydroSystem, string>([
    [HydroSystem.EBB_FLOW, 'Ebb & Flow Tecchnique(EFT)'],
    [HydroSystem.NUTRIENT_FILM, 'Nutrient Film Tecchnique(NFT)'],
    [HydroSystem.DRIP, 'Drip Irrigation Film Tecchnique(DIT)'],
    [HydroSystem.AERATED_FLOW, 'Aerated Flow Film Tecchnique(AFT)'],
    [HydroSystem.DEEP_FLOW, 'DeepFlow Film Tecchnique(DFT)'],
    [HydroSystem.STATIC_AERATED, 'Static Aerated Film Tecchnique(SAT)'],
    [HydroSystem.ROOT_MIST, 'Root Mist Film Tecchnique(RMT)'],
    [HydroSystem.FOG_FEED, 'Fog Feed Film Tecchnique(FFT)'],
    [HydroSystem.WICK, 'Wick Film Tecchnique'],
]);