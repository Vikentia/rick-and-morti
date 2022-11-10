import React from "react";
import { EpisodeType } from "../api/instance";
import style from "./Episode.module.scss";

type PropsType = {
    episode: EpisodeType;
};
export const Episode: React.FC<PropsType> = ({ episode }) => {
    return (
        <div className={style.container}>
            <div className={style.episodeBlock}>
                <p style={{ width: 10 }}>{episode.id}</p>
                <p style={{ width: 350 }}>Name: {episode.name}</p>
                <p style={{ width: 70 }}>{episode.episode}</p>
                <p style={{ width: 200 }}>{episode.air_date}</p>
            </div>
        </div>
    );
};
