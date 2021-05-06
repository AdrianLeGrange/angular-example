import { HardwareModuleType } from "src/app/enums";

export interface HardwareModule {
    description: string;
    type: HardwareModuleType;
    port: number;
}