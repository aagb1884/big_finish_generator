import { useState } from 'react';

const EventLocation = () => {

    const eventLocation = [
        'a lift',
        'Pigbin Josh',
        'Norwich',
        "a locked Tesla",
        'the Club Bongo International (Middlesbrough) during the Nineties',
        'F-Space',
        'Albert Square',
        "a space-station where it's illegal to post cringe",
        "the sleepy village of Bidmead",
        'that car park in Tenby that always smells of piss',
        "an abandoned space-station where nothing's actually wrong, it's just a bit old",
        "the Second Doctor's hotel room",
    ];

    const [location, setLocation] = useState("");
    const [showGif, setShowGif] = useState(false);

    function get_random_location() {
        const randomIndex = Math.floor(Math.random() * eventLocation.length);
        const selectedLocation = eventLocation[randomIndex];
        setLocation(selectedLocation);
    }

    const audio = new Audio('audio/thalia_4.mp3');

    function handleButtonClick() {
        setShowGif(true);
        audio.play();

        setTimeout(() => {
            get_random_location();
            audio.pause();
            setShowGif(false);
            audio.currentTime = 0;
        }, 3000); 
    }

    return ( 
        <div>
            <button type="button" className="button" onClick={handleButtonClick}>Select Location</button>
            {showGif && <img className="location-gif" src="images/rtd_titles.gif" alt="GIF" />} 
            {location && <p>{location}</p>}
        </div>
    );
}
 
export default EventLocation;