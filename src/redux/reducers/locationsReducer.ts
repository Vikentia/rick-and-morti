import { apiRickAndMorti, InfoType, LocationType } from '../../api/instance';
import { GetLocationsActionType, GetLocationsCurrentPageActionType, GetLocationsInfoActionType,
     setLocations, setLocationsInfo, SET_LOCATIONS, SET_LOCATIONS_CURRENT_PAGE, SET_LOCATIONS_INFO } from '../actions/locationsAction';
import { AppThunk } from "../store";


const initialState = {
    locations: [] as LocationType[],
    info: {} as InfoType,
    currentPage: 1,
}


export const locationsReducer = (state = initialState, action: LocationsActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_LOCATIONS:
            return { ...state, locations: action.payload.locations }
        case SET_LOCATIONS_CURRENT_PAGE:
            return { ...state, currentPage: action.payload.currentPage }
        case SET_LOCATIONS_INFO:
            return { ...state, info: action.payload.info }
        default:
            return state; //в дефолте не надо возвращать копию, можно оригинал
    }
}


export const getLocations = (currentPage: number): AppThunk => {
    return (dispatch) => {
        apiRickAndMorti.getLocations(currentPage)
            .then((res) => dispatch(setLocations(res.data.results)));
    }
}

export const getLocationsInfo = (): AppThunk => {
    return (dispatch) => {
        apiRickAndMorti.getLocationsInfo()
            .then((res) => dispatch(setLocationsInfo(res.data.info)));
    }
}


//types
type InitialStateType = typeof initialState // 
export type LocationsActionTypes = GetLocationsActionType | GetLocationsCurrentPageActionType | GetLocationsInfoActionType