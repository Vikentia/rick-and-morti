import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getEpisodes } from "../redux/reducers/episodesReducer";
import { Episode } from "./Episode";
import { PaginationFC } from "./Pagination/PaginationFC";
import { setEpisodesCurrentPage } from "../redux/actions/episodesAction";

export const Episodes = () => {
    const episodes = useAppSelector((state) => state.episodes.episodes);
    const currentPage = useAppSelector((state) => state.episodes.currentPage);
    const { pages } = useAppSelector((state) => state.episodes.info);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getEpisodes(currentPage));
    }, [currentPage]);

    console.log("episodes", episodes);

    return (
        <div>
            <PaginationFC
                currentPage={currentPage}
                pages={pages}
                //@ts-ignore
                setCurrentPageAction={setEpisodesCurrentPage}
            />
            {/* <p>Episodes</p> */}
            {episodes.map((item) => (
                <Episode key={item.id} episode={item} />
            ))}
        </div>
    );
};
