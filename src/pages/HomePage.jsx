import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Menu from "../component/Menu";

const HomePage = () => {
    return (
        <div>
            <Menu/>
            <h1>This is home page</h1>
            <Header/>
            <Hero/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default HomePage;