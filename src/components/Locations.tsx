import React, { useEffect } from "react";
import { getLocations } from "../redux/reducers/locationsReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { PaginationFC } from "./Pagination/PaginationFC";
import {Location}from './Location'
import {setLocationsCurrentPage} from '../redux/actions/locationsAction'

export const Locations = () => {
    const locations = useAppSelector((state) => state.locations.locations);
    const currentPage = useAppSelector((state) => state.locations.currentPage);
    const { pages } = useAppSelector((state) => state.locations.info);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getLocations(currentPage));
    }, [currentPage]);

    console.log("locations", locations);
    console.log("pages", pages);

    return (
        <div>
            Locations
            <PaginationFC
                currentPage={currentPage}
                pages={pages}
                //@ts-ignore
                setCurrentPageAction={setLocationsCurrentPage}
            />
            {locations.map((item) => (
                <Location key={item.id} location={item} />
            ))}
        </div>
    );
};
