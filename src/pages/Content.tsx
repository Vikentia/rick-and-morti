import React from "react";
import { Route, Routes } from "react-router-dom";
import { Characters } from "../components/Characters";
import { Episodes } from "../components/Episodes";
import { Locations } from "../components/Locations";

export const Content = () => {
    return (
        <div>
            <Routes>
                <Route path="/characters" element={<Characters />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/locations" element={<Locations />} />
            </Routes>
        </div>
    );
};
