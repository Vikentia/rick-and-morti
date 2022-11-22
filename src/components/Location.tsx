import React from "react";
import { LocationType } from "../api/instance";
import styles from "./Location.module.scss";

type PropsType = {
    location: LocationType;
};
export const Location: React.FC<PropsType> = ({ location }) => {
    let date = location.created.split('T')[0]
    return (
        <div className={styles.container}>
            <div className={styles.locationBlock}>
                <p style={{ width: 10 }}>{location.id}</p>
                <p style={{ width: 350 }}>Name: {location.name}</p>
                <p style={{ width: 200 }}>{location.type}</p>
                <p style={{ width: 150 }}>{date}</p>
            </div>
            <hr style={{ color: "grey" }} />
        </div>
    );
};
