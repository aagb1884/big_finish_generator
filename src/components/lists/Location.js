import { useState, useRef } from 'react';

const EventLocation = ({location, setLocation}) => {

    const eventLocation = [
        'a lift',
        'Pigbin Josh',
        'Norwich',
        "a locked Tesla",
        'the Club Bongo International (Middlesbrough) during the Nineties',
        'F-Space',
        'Albert Square',
        "an earth colony where it's illegal to post cringe",
        "the sleepy English village of Bidmead",
        'the car park in Tenby that always smells of piss',
        "a space station with abandonment issues",
        "the Second Doctor's hotel room",
        "or on a planet named after its  primary characteristic",
        "an amateur production of 'Footloose'",
        'a strange limbo world where nothing is as it seems',
        'a space whale',
        'the Netherfield ball',
        "harry sullivan's infanticide maze"
    ];

   
    const [showGif, setShowGif] = useState(false);
    const previousLocation = useRef(null)

    function get_random_location() {
        let randomIndex;

        do { randomIndex = Math.floor(Math.random() * eventLocation.length);
        } while (randomIndex === previousLocation.current)

        previousLocation.current = randomIndex;
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
            <button type="button" data-testid="location-button" className="button" onClick={handleButtonClick}>Get Location</button>
            {showGif && <img className="location-gif" src="images/rtd_titles.gif" alt="GIF" />} 
            {location && <p>{location}</p>}
        </div>
    );
}
 
export default EventLocation;