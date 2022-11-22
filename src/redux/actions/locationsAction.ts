import { InfoType, LocationType } from "../../api/instance";


export const SET_LOCATIONS = 'SET_LOCATIONS'
export const SET_LOCATIONS_CURRENT_PAGE = 'SET_LOCATIONS_CURRENT_PAGE'
export const SET_LOCATIONS_INFO = 'SET_LOCATIONS_INFO'

export const setLocations = (locations: LocationType[]) => {
    return { type: SET_LOCATIONS, payload: { locations } } as const;
}
export const setLocationsCurrentPage = (currentPage: number) => {
    return { type: SET_LOCATIONS_CURRENT_PAGE, payload: { currentPage } } as const;
}

export const setLocationsInfo = (info: InfoType) => {
    return { type: SET_LOCATIONS_INFO, payload: { info } } as const;
}

//types
export type GetLocationsActionType = ReturnType<typeof setLocations>
export type GetLocationsCurrentPageActionType = ReturnType<typeof setLocationsCurrentPage>
export type GetLocationsInfoActionType = ReturnType<typeof setLocationsInfo>