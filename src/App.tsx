import { HeaderFC } from "./pages/HeaderFC";
import { Navigation } from "./pages/Navigation";
import { ContentFC } from "./pages/Content";

import { Layout } from "antd";
import "antd/dist/antd.css";
import { FooterFC } from "./pages/FooterFC";

const { Header, Footer, Sider, Content } = Layout;

export const App = () => {
    return (
        <div>
            <Layout>
                <Header>
                    <HeaderFC />
                </Header>
                <Layout>
                    <Sider>
                        <Navigation />
                    </Sider>
                    <Content>
                        <ContentFC />
                    </Content>
                </Layout>
                {/* <Footer> */}
                    <FooterFC/>
                {/* </Footer> */}
            </Layout>
        </div>
    );
};
