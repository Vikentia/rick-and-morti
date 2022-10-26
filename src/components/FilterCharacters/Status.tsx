import React from "react";
import { Select } from "antd";
import styles from "./Status.module.scss";
import { StatusType } from "../Characters";

type PropsType = {
    setStatusValue: (status: StatusType) => void;
};
export const Status: React.FC<PropsType> = ({ setStatusValue }) => {
    const { Option } = Select;
    const handleChange = (status: StatusType) => {
        setStatusValue(status);
    };
    return (
        <div className={styles.statusBlock}>
            <p className={styles.statusBlock__title}>Status: </p>
            <Select
                className={styles.statusBlock__select}
                defaultValue="All"
                style={{ width: 110, marginTop: 10 }}
                onChange={handleChange}
            >
                <Option value="All">All</Option>
                <Option value="Alive">Alive</Option>
                <Option value="Dead">Dead</Option>
                <Option value="unknown">Unknown </Option>
            </Select>
        </div>
    );
};
