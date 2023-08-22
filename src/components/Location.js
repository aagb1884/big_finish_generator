import { useState } from 'react';

const EventLocation = () => {

    const eventLocation = [
        'A lift',
        'Pigbin Josh',
        'Norwich',
        'the first defenestration of Prague',
        "Elon Musk's takeover of Twitter"
         
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
            <button onClick={handleButtonClick}>Select Location</button>
            {showGif && <img src="/untempered_schism.gif" alt="GIF" />} 
            {location && <p>{location}</p>}
        </div>
    );
}
 
export default EventLocation;