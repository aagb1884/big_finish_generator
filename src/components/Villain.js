import { useState } from 'react';

const Villain = () => {

    const villains = [
        'Pigbin Josh',
        'Eighties Cyberleader',
        'Sixteenth Century French Catholics',
        'Madame Kovarian',
        'Jack Robertson',
        'the Timewyrm',
        'that big Yellow Dalek',
        'General Cobb',
        'that cow the Doctor asked about time scanners',
        'evil gas or something, I dunno',
        'the Birmingham six'
    ];

    const [villain, setVillain] = useState("");
    const [showGif, setShowGif] = useState(false);

    function get_random_villain() {
        const randomIndex = Math.floor(Math.random() * villains.length);
        const selectedVillain = villains[randomIndex];
        setVillain(selectedVillain);
    }

    const audio = new Audio('audio/thalia_3.mp3');
    

    function handleButtonClick() {
        setShowGif(true);
        audio.play();

        setTimeout(() => {
            get_random_villain();
            audio.pause();
            setShowGif(false);
            audio.currentTime = 0;
        }, 5590); 
    }

    return ( 
        <div>
            <button type="button" className="button" onClick={handleButtonClick}>Select Villain</button>
            {showGif && <img className="villain-gif" src="images/mccoy_titles.gif" alt="GIF" />} 
            {villain && <p>{villain}</p>}
        </div>
    );
}
 
export default Villain;