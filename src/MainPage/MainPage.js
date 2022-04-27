import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Navbar/Navbar.js";
import Table from "../components/Table/Table.js";
export default function MainPage() {
    return (
        <div style={{margin: 0, paddingBottom: '0%'}}>
            <Header/>
            <Navbar/>
            <Table/>
            <Footer/>
        </div>
    );
}