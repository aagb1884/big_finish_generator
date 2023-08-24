import React, { useState } from 'react';

const MainCharacter = () => {

    const mainCharacters = [
        'The Tenth Doctor',
        'River Song',
        'Dalek Caan',
        'The Morbius Doctors',
        'Captain Archibald Hamish Lethbridge-Stewart',
        'An unassuming writer/director/producer (plus actor) in his sixties',
        'Pigbin Josh',
        "The Companions' Rebound Support Group", 
        'Young Soldeed',
        "The painting of the Third Doctor from Timelash",  
        'Elton Pope',
        'Lucy Saxon',
    ];

    const [mainCharacter, setMainCharacter] = useState("");
    const [showGif, setShowGif] = useState(false);

    function get_random_main_character() {
        const randomIndex = Math.floor(Math.random() * mainCharacters.length);
        const selectedCharacter = mainCharacters[randomIndex];
        setMainCharacter(selectedCharacter);
    }

    function handleButtonClick() {
        setShowGif(true);

        setTimeout(() => {
            get_random_main_character();
            setShowGif(false);
        }, 3000); // Adjust the delay as needed (in milliseconds)
    }

    return ( 
        <div>
            <button type="button" class="button" onClick={handleButtonClick}>Select Main Character</button>
            {showGif && <img src="/untempered_schism.gif" alt="GIF" />} 
            {mainCharacter && <p>{mainCharacter}</p>}
        </div>
    );
}

export default MainCharacter;
