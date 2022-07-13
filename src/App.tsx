import { Header } from "./pages/Header";
import { Navigation } from "./pages/Navigation";
import { Content } from "./pages/Content";

import styles from "./App.module.scss";

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.app__main}>
                <Navigation />
                <Content />
            </div>
        </div>
    );
};
