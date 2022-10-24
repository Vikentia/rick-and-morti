import axios from 'axios';
import { ResponseType } from '../components/Characters';
import { CharacterType } from '../components/Character';
export const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    // withCredentials:true, //браузер отправляет куки вместе с запросом
    //     headers: {
    //         'API-KEY':'',
    //         Authorization: ''
    //  }
})

export const apiRickAndMorti = {
    getCharacters() {
        return instance
            .get<ResponseType<CharacterType>>("character")
    }
}
