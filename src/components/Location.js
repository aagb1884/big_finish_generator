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
        "a planet where it's illegal to post cringe",
        "the sleepy village of Bidmead",
        'that car park in Tenby that always smells of piss',
        "an abandoned space-station where nothing's actually wrong, it's just a bit old"
    ];

    const [location, setLocation] = useState("");
    const [showGif, setShowGif] = useState(false);

    function get_random_location() {
        const randomIndex = Math.floor(Math.random() * eventLocation.length);
        const selectedLocation = eventLocation[randomIndex];
        setLocation(selectedLocation);
    }

    function handleButtonClick() {
        setShowGif(true);

        setTimeout(() => {
            get_random_location();
            setShowGif(false);
        }, 3000); 
    }

    return ( 
        <div>
            <button type="button" class="button" onClick={handleButtonClick}>Select Location</button>
            {showGif && <img src="/rtd_titles.gif" alt="GIF" />} 
            {location && <p>{location}</p>}
        </div>
    );
}
 
export default EventLocation;