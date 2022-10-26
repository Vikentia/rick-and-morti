import styles from "./Character.module.scss";
import { Card, Col } from "antd";
import { StatusType } from "./Characters";

export type CharacterType = {
    created: string;
    episode: string[];
    gender: GenderType;
    id: number;
    image: string;
    location: LocationAndOriginType;
    name: string;
    origin: LocationAndOriginType;
    species: string;
    status: StatusType;
    type: string;
    url: string;
};
export type GenderType = "Female" | "Male" | "Genderless" | "unknown";


export type LocationAndOriginType = {
    name: string;
    url: string;
};

export const Character: React.FC<{ character: CharacterType }> = ({
    character,
}) => {
    const statusColor =
        character.status === "Alive"
            ? "#2deb5c"
            : character.status === "Dead"
            ? "#ff003a"
            : "#2d88eb";
    return (
        <div className={styles.characterBlock}>
            <Col span={40}>
                <Card
                    className={styles.card}
                    title={character.name}
                    bordered={false}
                >
                    <div>
                        <img src={character.image} alt="photo" />
                    </div>
                    <div>
                        <p>Gender: {character.gender}</p>
                        <p className={styles.card__status}>
                            Status:{" "}
                            <span style={{ color: statusColor }}>
                                {character.status}
                            </span>
                        </p>
                        <p>Location: {character.location.name}</p>
                        <p>Species: {character.species}</p>
                        <p>Type: {character.type || "-"}</p>
                    </div>
                </Card>
            </Col>
        </div>
    );
};
