import { useState } from 'react';

const SupportingCharacter = () => {

    const supportingCharacters = [
        "Rhys from Torchwood's Mum",
        'Pigbin Josh',
        "Choking on an Olive woman from 'The Lazarus Experiment'",
        "That pirate who just disappears for ages in 'Curse of the Black Spot'",
        'Angie and Artie Maitland',
        "Richard Nixon",
        'Alpha Centauri',
        'Kebab Man from The Woman Who Fell To Earth',
        'Commander Maxil',
        "Baby Benton from 'The Time Monster'",
    ];

    const [supportingCharacter, setSupportingCharacter] = useState("");
    const [showGif, setShowGif] = useState(false);

    function get_random_supporting_character() {
        const randomIndex = Math.floor(Math.random() * supportingCharacters.length);
        const selectedCharacter = supportingCharacters[randomIndex];
        setSupportingCharacter(selectedCharacter);
    }

    function handleButtonClick() {
        setShowGif(true);

        setTimeout(() => {
            get_random_supporting_character();
            setShowGif(false);
        }, 3000); 
    }

    return ( 
        <div>
            <button onClick={handleButtonClick}>Select Supporting Character</button>
            {showGif && <img src="/capaldi_clocks.gif" alt="GIF" />} 
            {supportingCharacter && <p>{supportingCharacter}</p>}
        </div>
    );
}
 
export default SupportingCharacter;