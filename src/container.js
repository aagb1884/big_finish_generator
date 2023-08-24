import MainCharacter from "./components/MainCharacter";
import SupportingCharacter from "./components/SupportingCharacter";
import Villain from "./components/Villain";
import EventLocation from "./components/Location";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const Container = () => {

    // const generatedStory = () => {
    // console.log("Main character and Supporting Character meet Villain set in or around Historical Event")
    // }


    
    return (
        <>
        <header>
            <div className="the">The </div> 
            <h1>   <div className="big">BIG</div> 
            <div className="finish">FINISH</div> </h1>
            <div className="boxset-generator"> Boxset Generator </div>
            <div className="line"> | </div>
            <h3><i>Because we have hundreds of these to make and ideas are hard.</i></h3>
        </header>
        <br/>
        <Row gutter={20} justify="center" align="middle">
            <Col span={3}>At last, </Col>
            <Col span={3}><MainCharacter /></Col>
        </Row>
        <br />
        <Row gutter={20} justify="center" align="middle">
        <Col span={3}>and</Col>
            <Col span={3}><SupportingCharacter /></Col>
        </Row>
        <br />
        <Row gutter={20} justify="center" align="middle">
            <Col span={3}>meet</Col>
            <Col span={3}><Villain /></Col>
        </Row>
        <br />
        <Row gutter={20} justify="center" align="middle">
            <Col span={3}>set in or around</Col>
            <Col span={3}><EventLocation /></Col>
        </Row>
    
        <footer>
        <h1>WE LOVE STORIES</h1>
        </footer>
        </>
     );
}
 
export default Container;