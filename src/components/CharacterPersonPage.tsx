import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import styles from "./CharacterPersonPage.module.scss";

type PropsType = {
    // id: number;
};
export const CharacterPersonPage: React.FC<PropsType> = () => {
    const params = useParams();
    let id = Number(params["*"]);

    const characters = useAppSelector((state) => state.characters.characters);
    const [personInfo] = characters.filter((item) => item.id === id);
    let date = personInfo.created.split('T')[0]
    // console.log(personInfo);

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.title}>{personInfo.name}</p>
                <img src={personInfo.image} className={styles.photo} />
            </div>
            <div className={styles.info}>
                <p>Id: {personInfo.id}</p>
                <p>Gender: {personInfo.gender}</p>
                <p>Species: {personInfo.species}</p>
                <p>Type: {personInfo.type || 'unknown'}</p>
                <p>Status: {personInfo.status}</p>
                <p>Origin: {personInfo.origin.name}</p>
                <p>Location: {personInfo.location.name}</p>
                <p>Episodes: {personInfo.episode.length}</p>
                <p>Date: {date}</p>
            </div>
        </div>
    );
};
