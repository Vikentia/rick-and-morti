import React from "react";
import { Select } from "antd";
import styles from "./Status.module.scss";
import { SpeciesType } from "../Characters";

type PropsType = {
    setSpeciesValue: (species: SpeciesType) => void;
};
export const Species: React.FC<PropsType> = ({ setSpeciesValue }) => {
    const { Option } = Select;

    const handleChange = (gender: SpeciesType) => {
        setSpeciesValue(gender);
    };
    return (
        <div className={styles.statusBlock}>
            <p className={styles.statusBlock__title}>Species: </p>
            <Select
                className={styles.statusBlock__select}
                defaultValue="All"
                style={{ width: 110, marginTop: 10 }}
                onChange={handleChange}
            >
                <Option value="All">All</Option>
                <Option value="Human">Human</Option>
                <Option value="Alien">Alien</Option>
            </Select>
        </div>
    );
};
