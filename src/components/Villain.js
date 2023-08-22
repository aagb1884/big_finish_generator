import { useState } from 'react';

const Villain = () => {

    const villains = [
        'Pigbin Josh',
        "Bertie Cavel's 'Mysterious Man'",
        'Eighties Cyberleader',
        'Sixteenth Century French Catholics',
        'Jack Robertson',
        'the Timewyrm,'
        
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
        }, 3000); 
    }

    return ( 
        <div>
            <button onClick={handleButtonClick}>Select Villain</button>
            {showGif && <img src="/untempered_schism.gif" alt="GIF" />} 
            {villain && <p>{villain}</p>}
        </div>
    );
}
 
export default Villain;