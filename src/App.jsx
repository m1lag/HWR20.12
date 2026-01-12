import Title from "./components/Title";
import History from "./components/History";
import Ingredients from "./components/Ingredients";
import Steps from "./components/Steps";
import Photo from "./components/Photo";
import Layout from "./components/Layout";

export default function App() {
    return (
        <Layout>
            <Title />
            <History />
            <Ingredients />
            <Steps />
            <Photo />
        </Layout>
    );
}