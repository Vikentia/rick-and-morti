import { Dispatch } from "redux"
import { CharacterType } from "../../components/Character"
import { GetCharactersActionType, SET_CHARACTERS, setCharacters } from "../actions/charactersAction"
import { apiRickAndMorti, EpisodeType } from '../../api/instance';
import { AppThunk } from "../store";
import { GetEpisodesActionType, SET_EPISODES, setEpisodes } from '../actions/episodesAction';

const initialState = {
    episodes: [] as EpisodeType[] //!!!!
}


export const episodesReducer = (state = initialState, action: EpisodesActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_EPISODES:
            return { ...state, episodes: action.payload.episodes }
        default:
            return state; //в дефолте не надо возвращать копию, можно оригинал
    }
}

export const getEpisodes = (): AppThunk => {
    return (dispatch) => {
        apiRickAndMorti.getEpisodes()
            .then((res) => dispatch(setEpisodes(res.data.results)));
        // .then((res) => console.log('res', res)            );
    }
}


//types
type InitialStateType = typeof initialState // 
export type EpisodesActionTypes = GetEpisodesActionType 