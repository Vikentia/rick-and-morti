import { Dispatch } from "redux"
import { CharacterType } from "../../components/Character"
import {
    GetCharactersActionType,
    SET_CHARACTERS,
    setCharacters,
    setCharactersInfo,
    GetCharactersInfoActionType,
    SET_CHARACTERS_INFO,
    GetCurrentPageActionType,
    SET_CURRENT_PAGE,
    setCurrentPage
} from '../actions/charactersAction';
import { apiRickAndMorti, InfoType } from '../../api/instance';
import { AppThunk } from "../store";

const initialState = {
    characters: [] as CharacterType[], //!!!!
    info: {} as InfoType,
    currentPage: 1,
}


export const charactersReducer = (state = initialState, action: CharactersActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_CHARACTERS:
            return { ...state, characters: action.payload.characters }
        case SET_CHARACTERS_INFO:
            return { ...state, info: action.payload.info }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload.currentPage }
        default:
            return state; //в дефолте не надо возвращать копию, можно оригинал
    }
}

export const getCharacters = (currentPage: number): AppThunk => {
    return (dispatch) => {
        apiRickAndMorti.getCharacters(currentPage)
            .then((res) => dispatch(setCharacters(res.data.results)));
    }
}
export const getCharactersInfo = (): AppThunk => {
    return (dispatch) => {
        apiRickAndMorti.getCharactersInfo()
            .then((res) => dispatch(setCharactersInfo(res.data.info)));
    }
}


//types
type InitialStateType = typeof initialState // 
export type CharactersActionTypes = GetCharactersActionType | GetCharactersInfoActionType | GetCurrentPageActionType