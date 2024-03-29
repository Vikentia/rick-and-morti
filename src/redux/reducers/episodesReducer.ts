
import { apiRickAndMorti, EpisodeType, InfoType } from '../../api/instance';
import { AppThunk } from "../store";
import {
    GetEpisodesActionType, SET_EPISODES, setEpisodes, GetEpisodesInfoActionType, setEpisodesInfo, SET_EPISODES_INFO,
    GetEpisodesCurrentPageActionType, SET_EPISODES_CURRENT_PAGE
} from '../actions/episodesAction';

const initialState = {
    episodes: [] as EpisodeType[], //!!!!
    info: {} as InfoType,
    currentPage: 1,
}


export const episodesReducer = (state = initialState, action: EpisodesActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_EPISODES:
            return { ...state, episodes: action.payload.episodes }
        case SET_EPISODES_CURRENT_PAGE:
            return { ...state, currentPage: action.payload.currentPage }
        case SET_EPISODES_INFO:
            return { ...state, info: action.payload.info }
        default:
            return state; //в дефолте не надо возвращать копию, можно оригинал
    }
}


export const getEpisodes = (currentPage: number): AppThunk => {
    return (dispatch) => {
        apiRickAndMorti.getEpisodes(currentPage)
            .then((res) => dispatch(setEpisodes(res.data.results)));
    }
}

export const getEpisodesInfo = (): AppThunk => {
    return (dispatch) => {
        apiRickAndMorti.getEpisodesInfo()
            .then((res) => dispatch(setEpisodesInfo(res.data.info)));
    }
}


//types
type InitialStateType = typeof initialState // 
export type EpisodesActionTypes = GetEpisodesActionType | GetEpisodesCurrentPageActionType | GetEpisodesInfoActionType