import React, { useEffect } from "react";
import { Pagination, Button } from "antd";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { createPages } from "../../utils/pagesCreator";
import {
    getCharactersInfo,
    getCharacters,
} from "../../redux/reducers/charactersReducer";
import styles from "./Pagination.module.scss";
import { setCurrentPage } from "../../redux/actions/charactersAction";

export const PaginationFC: React.FC = () => {
    const { count, next, prev, pages } = useAppSelector(
        (state) => state.characters.info
    );
    const currentPage = useAppSelector((state) => state.characters.currentPage);
    const dispatch = useAppDispatch();
    const pagesArr = [] as number[];
    createPages(pagesArr, pages, currentPage);

    // console.log("pages", pages);
    // console.log("count", count);
    // console.log("next", next);
    // console.log("prev", prev);
    // console.log("pagesArr", pagesArr);
    console.log("currentPage", currentPage);

    useEffect(() => {
        dispatch(getCharactersInfo());
    }, []);

    const getCharactersNextPage = (
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        console.log("СТРАНИЦА==>", e.currentTarget.firstChild?.textContent);
        // console.log("e.Target", parseInt(e.currentTarget.firstChild+''));
        // dispatch(setCurrentPage(parseInt(e.currentTarget.firstChild + "1")));
        dispatch(
            setCurrentPage(
                parseInt(e.currentTarget.firstChild?.textContent + "")
            )
        );
    };

    return (
        <div>
            {/* <Pagination defaultCurrent={1} total={50} /> */}
            {/* <Button onClick={() => {}}>{prev && <p>Prev</p>}</Button> */}
            {}
            {pagesArr.map((item, ind) => (
                <div
                    key={ind}
                    style={{width:10}}
                    className={styles.pagesNumber}
                    onClick={getCharactersNextPage}
                >
                    <div>{item}</div>
                </div>
            ))}
            {<span> ... {pages}</span>}
            {/* 
            <Button>2</Button>
            <Button>3</Button> */}
            {/* <Button onClick={() => getCharactersNextPage()}>
                {next && <p>Next</p>}
            </Button> */}
        </div>
    );
};
