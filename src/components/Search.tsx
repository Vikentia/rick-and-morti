import React, { useState, useEffect } from "react";
import { Input } from "antd";
import styles from "./Search.module.scss";

type PropsType = {
    setSearchRequest: (str: string) => void;
};
export const Search: React.FC<PropsType> = ({ setSearchRequest }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setTimeout(() => setSearchRequest(inputValue), 1000);
    }, [inputValue]);
    return (
        <div>
            Search:
            <Input
                className={styles.charactersBlock__input}
                placeholder="Character name"
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
        </div>
    );
};
