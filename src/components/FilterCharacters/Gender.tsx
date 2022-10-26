import React from "react";
import { Select } from "antd";
import styles from "./Status.module.scss";
import { GenderType } from "../Characters";

type PropsType = {
    setGenderValue: (gender: GenderType) => void;
};
export const Gender: React.FC<PropsType> = ({ setGenderValue }) => {
    const { Option } = Select;

    const handleChange = (gender: GenderType) => {
        setGenderValue(gender);
    };
    return (
        <div className={styles.statusBlock}>
            <p className={styles.statusBlock__title}>Gender: </p>
            <Select
                className={styles.statusBlock__select}
                defaultValue="All"
                style={{ width: 110, marginTop: 10 }}
                onChange={handleChange}
            >
                <Option value="All">All</Option>
                <Option value="Female">Female</Option>
                <Option value="Male">Male</Option>
                <Option value="unknown">Unknown </Option>
            </Select>
        </div>
    );
};
