import React, { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import styles from "./Characters.module.scss";
import { getCharacters } from "../redux/reducers/charactersReducer";
import { Character } from "./Character";
import { Row } from "antd";
import { Search } from "./Search";
import { Status } from "./FilterCharacters/Status";
import { Gender } from "./FilterCharacters/Gender";
import { Species } from "./FilterCharacters/Species";

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

export type Nullable<T> = null | T;

export type StatusType = "All" | "Dead" | "Alive" | "unknown";
export type GenderType = "All" | "Female" | "Male" | "unknown";
export type SpeciesType = "All" | "Human" | "Alien";

export const Characters: React.FC = () => {
    // const [characters, setCharacters] = useState<CharacterType[]>([]);
    const characters = useAppSelector((state) => state.characters.characters);
    // const characters = useSelector < AppStoreType, CharacterType[] > ((state) => state.characters.characters);
    const dispatch = useAppDispatch();

    const [searchRequest, setSearchRequest] = useState("");
    const [statusValue, setStatusValue] = useState<StatusType>("All");
    const [genderValue, setGenderValue] = useState<GenderType>("All");
    const [speciesValue, setSpeciesValue] = useState<SpeciesType>("All");

    useEffect(() => {
        dispatch(getCharacters());
    }, []);
    console.log(characters);

    return (
        <div className={styles.charactersBlock}>
            <div className={styles.searchFilter}>
                <Search setSearchRequest={setSearchRequest} />
                <Status setStatusValue={setStatusValue} />
                <Gender setGenderValue={setGenderValue} />
                <Species setSpeciesValue={setSpeciesValue} />
            </div>
            <div className="site-card-wrapper">
                <Row gutter={30}>
                    {characters
                        ?.filter((item) =>
                            item.name.toLowerCase().includes(searchRequest)
                        )
                        .filter((item) => {
                            return statusValue !== "All"
                                ? item.status === statusValue
                                : item;
                        })
                        .filter((item) => {
                            return genderValue !== "All"
                                ? item.gender === genderValue
                                : item;
                        })
                        .filter((item) => {
                            return speciesValue !== "All"
                                ? item.species === speciesValue
                                : item;
                        })
                        .map((item) => (
                            <Character character={item} />
                        ))}
                </Row>
            </div>
        </div>
    );
};
