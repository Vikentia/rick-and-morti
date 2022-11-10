import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getEpisodes } from "../redux/reducers/episodesReducer";
import { Episode } from "./Episode";

export const Episodes = () => {
    const episodes = useAppSelector((state) => state.episodes.episodes);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getEpisodes());
    }, []);

    console.log("episodes", episodes);

    return (
        <div>
            <p>Episodes</p>
            {episodes.map((item) => (
                <Episode episode={item} />
            ))}
        </div>
    );
};
