import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AppStoreActionType } from "../redux/store";
import { getCharacters } from "../redux/actions/charactersAction";
import styles from "./Characters.module.scss";

export type CharacterType = {
    created: string;
    episode: string[];
    gender: GenderType;
    id: number;
    image: string;
    location: LocationAndOriginType;
    name: string;
    origin: LocationAndOriginType;
    species: string;
    status: StatusType;
    type: string;
    url: string;
};
export type GenderType = "Female" | "Male" | "Genderless" | "unknown";

export type StatusType = "Dead" | "Alive" | "unknown";

export type LocationAndOriginType = {
    name: string;
    url: string;
};

type ResponseType<T = void> = {
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

export type Nullable<T> = null | T;

export const Characters = () => {
    // const [characters, setCharacters] = useState<CharacterType[]>([]);
    const characters = useSelector<AppStoreActionType, CharacterType[]>(
        (state) => state.characters.characters
    );
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get<ResponseType<CharacterType>>(
                "https://rickandmortyapi.com/api/character"
            )
            .then((res) => dispatch(getCharacters(res.data.results)));
    }, []);
    return (
        <div>
            {characters.map((item) => {
                return (
                    <div className={styles.characterBlock} key={item.id}>
                        <div className={styles.characterBlock__name}>
                            {item.name}
                        </div>
                        <img
                            className={styles.characterBlock__photo}
                            src={item.image}
                            alt="photo"
                        />
                    </div>
                );
            })}
        </div>
    );
};
