import { EpisodeType, InfoType } from "../../api/instance";


export const SET_EPISODES = 'SET_EPISODES'
export const SET_EPISODES_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_EPISODES_INFO = 'SET_EPISODES_INFO'

export const setEpisodes = (episodes: EpisodeType[]) => {
    return { type: SET_EPISODES, payload: { episodes } } as const;
}
export const setEpisodesCurrentPage = (currentPage: number) => {
    return { type: SET_EPISODES_CURRENT_PAGE, payload: { currentPage } } as const;
}

export const setEpisodesInfo = (info: InfoType) => {
    return { type: SET_EPISODES_INFO, payload: { info } } as const;
}
export type GetEpisodesActionType = ReturnType<typeof setEpisodes>
export type GetEpisodesCurrentPageActionType = ReturnType<typeof setEpisodesCurrentPage>
export type GetEpisodesInfoActionType = ReturnType<typeof setEpisodesInfo>