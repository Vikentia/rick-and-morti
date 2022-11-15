import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderFC.module.scss";

export const HeaderFC = () => {
    return (
        <div className={styles.header}>
            <Button type="text">
                <NavLink to="/">Start page</NavLink>
            </Button>
        </div>
    );
};
