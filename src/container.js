import MainCharacter from "./components/MainCharacter";
import SupportingCharacter from "./components/SupportingCharacter";
import Villain from "./components/Villain";
import EventLocation from "./components/Location";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const Container = () => {
    
    return (
        <div className="container">
        <Header />
        <section>
        <br/>
        <Row gutter={20} justify="center" align="middle">
            <Col span={6}>At last, </Col>
            <Col span={6}><MainCharacter /></Col>
        </Row>
        <br />
        <Row gutter={20} justify="center" align="middle">
        <Col span={6}>and</Col>
            <Col span={6}><SupportingCharacter /></Col>
        </Row>
        <br />
        <Row gutter={20} justify="center" align="middle">
            <Col span={6}>will meet</Col>
            <Col span={6}><Villain /></Col>
        </Row>
        <br />
        <Row gutter={10} justify="center" align="middle">
            <Col span={6}>in</Col>
            <Col span={6}><EventLocation /></Col>
        </Row>
        </section>
        <Footer />
        </div>
     );
}
 
export default Container;