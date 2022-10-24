import { Dispatch } from "redux"
import { CharacterType } from "../../components/Character"
import { GetCharactersActionType, SET_CHARACTERS, setCharacters } from "../actions/charactersAction"
import { apiRickAndMorti } from '../../api/instance';
import { AppThunk } from "../store";

const initialState = {
    characters: [] as CharacterType[] //!!!!
}


export const charactersReducer = (state = initialState, action: CharactersActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_CHARACTERS:
            return { ...state, characters: action.payload.characters }
        default:
            return state; //в дефолте не надо возвращать копию, можно оригинал
    }
}

export const getCharacters = (): AppThunk => {
    return (dispatch) => {
        apiRickAndMorti.getCharacters()
            .then((res) => dispatch(setCharacters(res.data.results)));
    }
}


//types
type InitialStateType = typeof initialState // 
export type CharactersActionTypes = GetCharactersActionType 