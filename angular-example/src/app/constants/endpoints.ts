import { environment } from "src/environments/environment";

export const Endpoints = {
    Hardware: {
        getHardware: `${environment.apiUrl}/hardware`,
        addHardware: `${environment.apiUrl}/hardware`,
        getPorts: `${environment.apiUrl}/ports`,
    }
}