import MainCharacter from "./components/MainCharacter";
import SupportingCharacter from "./components/SupportingCharacter";
import Villain from "./components/Villain";
import EventLocation from "./components/Location";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Screengrab from "./Screengrab";
import { useRef } from "react";

const Container = () => {
    const sectionRef = useRef();

    return (
        <div className="container">
        <Header />
    
        <div className="main-content">
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
        <aside ref={sectionRef}> 
                {/* ... your code */}
            </aside>
            <Screengrab componentRef={sectionRef} /> 
            </div>
        <Footer />
        </div>
     );
}

export default Container;