import MainCharacter from "./components/MainCharacter";
import SupportingCharacter from "./components/SupportingCharacter";
import Villain from "./components/Villain";
import EventLocation from "./components/Location";

const Container = () => {

    // const generatedStory = () => {
    // console.log("Main character and Supporting Character meet Villain set in or around Historical Event")
    // }

    // const combinedFunction = () => {
    //  this.generatedStory();
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
        <section className="grid">  
                <div class="grid-item"><MainCharacter /> and</div>
                <div class="grid-item"><SupportingCharacter /> meet</div>
                <div class="grid-item"><Villain /> set in or around</div>
                <div class="grid-item"> <EventLocation /></div>                
        </section>
        </>
     );
}
 
export default Container;