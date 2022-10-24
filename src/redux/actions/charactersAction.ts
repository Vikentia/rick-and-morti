import { CharacterType } from "../../components/Character"

export const SET_CHARACTERS = 'SET_CHARACTERS'

export const setCharacters = (characters: CharacterType[]) => {
    return { type: SET_CHARACTERS, payload: { characters } } as const;
}

export type GetCharactersActionType = ReturnType<typeof setCharacters>