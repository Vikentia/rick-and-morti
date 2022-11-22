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
export type LocationType = {
    id: number,
    name: string,
    type: string,
    residents: string[],
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
    getLocationsInfo() {
        return instance
            .get<ResponseType<InfoType>>("location")
    },
    getLocations(currentPage:number) {
        return instance
            .get<ResponseType<LocationType>>(`location?page=${currentPage}`)
    },
}
