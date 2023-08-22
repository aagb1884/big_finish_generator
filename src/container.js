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
        <section>
        <header>The Big Finish Boxset Generator</header>
        <p>Because ideas are hard.</p>
        </section>
                <MainCharacter /> and
                <SupportingCharacter /> meet
                <Villain /> set in or around
                <EventLocation />
      
        </>
     );
}
 
export default Container;