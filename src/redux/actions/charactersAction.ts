import { CharacterType } from "../../App"

export const GET_CHARACTERS = 'GET_CHARACTERS'

export const getCharacters = (charaters: CharacterType[]) => {
    return { type: GET_CHARACTERS, payload: { charaters } } as const;
}

export type GetCharactersActionType = ReturnType<typeof getCharacters>