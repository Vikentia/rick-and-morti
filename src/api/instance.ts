import axios from 'axios';
import { Nullable } from '../components/Characters';
import { CharacterType } from '../components/Character';
export const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    // withCredentials:true, //браузер отправляет куки вместе с запросом
    //     headers: {
    //         'API-KEY':'',
    //         Authorization: ''
    //  }
})
export type ResponseType<T = void> = {
    //void удалить
    info: InfoType;
    results: T[];
};
export type InfoType = {
    count: number;
    next: Nullable<string>;
    pages: number;
    prev: Nullable<string>;
};
export type EpisodeType = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}

export const apiRickAndMorti = {
    getCharactersInfo() {
        return instance
            .get<ResponseType<InfoType>>("character")
    },
    getCharacters(currentPage:number) {
        return instance
            .get<ResponseType<CharacterType>>(`character?page=${currentPage}`)
    },
    getEpisodesInfo() {
        return instance
            .get<ResponseType<InfoType>>("episode")
    },
    getEpisodes(currentPage:number) {
        return instance
            .get<ResponseType<EpisodeType>>(`episode?page=${currentPage}`)
    },
}
