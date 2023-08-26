import MainCharacter from "./components/lists/MainCharacter";
import SupportingCharacter from "./components/lists/SupportingCharacter";
import Villain from "./components/lists/Villain";
import EventLocation from "./components/lists/Location";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClearAll from "./components/ClearAll";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import React, { useState } from 'react';

const Container = () => {

    const [mainCharacter, setMainCharacter] = useState("");
    const [supportingCharacter, setSupportingCharacter] = useState("");
    const [villain, setVillain] = useState("");
    const [location, setLocation] = useState("");

    function clearAll() {
        setMainCharacter("");
        setSupportingCharacter("");
        setVillain("");
        setLocation("");
    }

    return (
        <div className="container">
        <Header />
    

        <section>
        <br/>
        <Row gutter={30} justify="center" align="stretch">
            <Col span={6}>At last, </Col>
            <Col span={6}><MainCharacter mainCharacter={mainCharacter} setMainCharacter={setMainCharacter} /></Col>
            <Col span={6}>and</Col>
            <Col span={6}><SupportingCharacter supportingCharacter={supportingCharacter} setSupportingCharacter={setSupportingCharacter} /></Col>
            <Col span={6}>will meet</Col>
            <Col span={6}><Villain villain={villain} setVillain={setVillain} /></Col>
            <Col span={6}>in</Col>
            <Col span={6}><EventLocation location={location} setLocation={setLocation} /></Col>
        </Row>
        <br />
        <ClearAll clearAll={clearAll} />
        </section>
        <Footer />
        </div>
     );
}
 
export default Container;