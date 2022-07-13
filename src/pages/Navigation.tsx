import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <p>Menu</p>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </div>
    );
};
