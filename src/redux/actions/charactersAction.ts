import { InfoType } from "../../api/instance";
import { CharacterType } from "../../components/Character"

export const SET_CHARACTERS = 'SET_CHARACTERS'
export const SET_CHARACTERS_INFO = 'SET_CHARACTERS_INFO'
export const SET_CHARACTERS_CURRENT_PAGE = 'SET_CHARACTERS_CURRENT_PAGE'


export const setCharacters = (characters: CharacterType[]) => {
    return { type: SET_CHARACTERS, payload: { characters } } as const;
}

export const setCharactersInfo = (info: InfoType) => {
    return { type: SET_CHARACTERS_INFO, payload: { info } } as const;
}

export const setCharacterCurrentPage = (currentPage:number) => {
    return { type: SET_CHARACTERS_CURRENT_PAGE, payload: { currentPage } } as const;
}


export type GetCharactersActionType = ReturnType<typeof setCharacters>
export type GetCharactersInfoActionType = ReturnType<typeof setCharactersInfo>
export type GetCharacterCurrentPageActionType = ReturnType<typeof setCharacterCurrentPage>