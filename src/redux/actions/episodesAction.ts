import { EpisodeType } from "../../api/instance";


export const SET_EPISODES = 'SET_EPISODES'

export const setEpisodes = (episodes: EpisodeType[]) => {
    return { type: SET_EPISODES, payload: { episodes } } as const;
}

export type GetEpisodesActionType = ReturnType<typeof setEpisodes>