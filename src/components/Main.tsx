import React from "react";
import mainPhoto from "../assets/pic2.jpg";
import photo from "../assets/pic1.png";
import styles from "./Main.module.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export const Main = () => {
    return (
        <div className={styles.contentBlock}>
            <div className={styles.mainPhoto}>
                <img src={mainPhoto} alt="pic" />
            </div>
            <div className={styles.nav}>
                <div>
                    <Button><NavLink to="/characters">Characters</NavLink></Button>
                </div>
                <div>
                    <Button><NavLink to="/episodes">Episodes</NavLink></Button>
                </div>
                <div>
                    <Button><NavLink to="/locations">Locations</NavLink></Button>
                </div>
                <img src={photo} alt="pic" className={styles.photo} />
            </div>
        </div>
    );
};
