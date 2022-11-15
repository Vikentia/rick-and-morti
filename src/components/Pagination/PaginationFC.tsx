import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { createPages } from "../../utils/pagesCreator";
import { getCharactersInfo } from "../../redux/reducers/charactersReducer";
import styles from "./Pagination.module.scss";
import { setCurrentPage } from "../../redux/actions/charactersAction";
import { setEpisodesCurrentPage } from "../../redux/actions/episodesAction";
import { getEpisodesInfo } from "../../redux/reducers/episodesReducer";

type PropsType = {
    pages: number;
    currentPage: number;
};
export const PaginationFC: React.FC<PropsType> = ({ pages, currentPage }) => {
    const dispatch = useAppDispatch();
    const pagesArr = [] as number[];
    createPages(pagesArr, pages, currentPage);

    console.log("currentPage", currentPage);

    useEffect(() => {
        dispatch(getCharactersInfo());
        dispatch(getEpisodesInfo());
    }, []);


    const getNextPage = (
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        console.log("СТРАНИЦА==>", e.currentTarget.firstChild?.textContent);
        dispatch(
            setCurrentPage(
                parseInt(e.currentTarget.firstChild?.textContent + "")
            )
        );
    };

    return (
        <div>
            {pagesArr.map((item, ind) => (
                <div
                    key={ind}
                    style={{ width: 10 }}
                    className={styles.pagesNumber}
                    onClick={getNextPage}
                >
                    <div>{item}</div>
                </div>
            ))}
            {<span> ... {pages}</span>}
        </div>
    );
};
