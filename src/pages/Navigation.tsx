import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { Button } from "antd";

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            {/* <p>Menu</p> */}
            <Button>
                <NavLink to="/characters">Characters</NavLink>
            </Button>
            <Button>
                <NavLink to="/episodes">Episodes</NavLink>
            </Button>
            <Button>
                <NavLink to="/locations">Locations</NavLink>
            </Button>
        </div>
    );
};
