import React, { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import styles from "./Characters.module.scss";
import { getCharacters } from "../redux/reducers/charactersReducer";
import { Character } from "./Character";
import { Row } from "antd";
import { Input } from "antd";

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

export const Characters: React.FC = () => {
    // const [characters, setCharacters] = useState<CharacterType[]>([]);
    const characters = useAppSelector((state) => state.characters.characters);
    // const characters = useSelector < AppStoreType, CharacterType[] > ((state) => state.characters.characters);
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState("");
    const [searchRequest, setSearchRequest] = useState("");

    useEffect(() => {
        dispatch(getCharacters());
    }, []);
    useEffect(() => {
        setTimeout(() => setSearchRequest(inputValue), 1000);
    }, [inputValue]);
    return (
        <div className={styles.charactersBlock}>
            Search:
            <Input
                className={styles.charactersBlock__input}
                placeholder="Character name"
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <div className="site-card-wrapper">
                <Row gutter={30}>
                    {characters
                        ?.filter((item) => item.name.toLowerCase().includes(searchRequest))
                        .map((item) => (
                            <Character character={item} />
                        ))}
                </Row>
            </div>
        </div>
    );
};
