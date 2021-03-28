export enum LightSource {
    AritficialLight = 0,
    ArtificialAndSunLight = 1,
    SunLight = 2,
}

export const LightSourceDescriptions = new Map<LightSource, string>([
    [LightSource.AritficialLight, 'Artificial light'],
    [LightSource.ArtificialAndSunLight, 'Artificial & Sun Light'],
    [LightSource.SunLight, 'Sun Light'],
]);