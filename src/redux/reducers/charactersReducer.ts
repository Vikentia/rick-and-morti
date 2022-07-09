import { CharacterType } from "../../App"
import { GetCharactersActionType, GET_CHARACTERS } from "../actions/charactersAction"

const initialState = {
    characters: [] as CharacterType[] //!!!!
}
type InitialStateType = typeof initialState // 

export const charactersReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return { ...state, characters: action.payload.charaters }
        default:
            return state; //в дефолте не надо возвращать копию, можно оригинал
    }
}


type ActionTypes = GetCharactersActionType