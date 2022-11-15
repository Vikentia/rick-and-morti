import React from "react";
import { Route, Routes } from "react-router-dom";
import { Characters } from "../components/Characters";
import { Episodes } from "../components/Episodes";
import { Locations } from "../components/Locations";
import { Main } from "../components/Main";
import styles from './Content.module.scss'

export const ContentFC = () => {
    return (
        <div className={styles.contentBlock}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/locations" element={<Locations />} />
                {/* <Route path="*" element={<Error />} /> */}
            </Routes>
        </div>
    );
};
