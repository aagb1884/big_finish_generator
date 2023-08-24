import { useState } from 'react';

const Villain = () => {

    const villains = [
        'Pigbin Josh',
        "Bertie Cavel's 'Mysterious Man'",
        'Eighties Cyberleader',
        'Sixteenth Century French Catholics',
        'Jack Robertson',
        'the Timewyrm',
        'that big Yellow Dalek',
        'General Cobb',
        'That cow the Doctor asked about time scanners',
        'I dunno, evil gas or something',
    ];

    const [villain, setVillain] = useState("");
    const [showGif, setShowGif] = useState(false);

    function get_random_villain() {
        const randomIndex = Math.floor(Math.random() * villains.length);
        const selectedVillain = villains[randomIndex];
        setVillain(selectedVillain);
    }

    function handleButtonClick() {
        setShowGif(true);

        setTimeout(() => {
            get_random_villain();
            setShowGif(false);
        }, 5590); 
    }

    return ( 
        <div>
            <button type="button" class="button" onClick={handleButtonClick}>Select Villain</button>
            {showGif && <img src="/mccoy_titles.gif" alt="GIF" />} 
            {villain && <p>{villain}</p>}
        </div>
    );
}
 
export default Villain;