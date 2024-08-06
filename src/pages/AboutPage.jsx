import { useParams } from "react-router-dom";
import Menu from "../component/Menu";

const AboutPage = () => {
   let {id,name} = useParams();
    return (
        <>
        <Menu/>
            <h1>This is about page</h1>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    );
};

export default AboutPage;