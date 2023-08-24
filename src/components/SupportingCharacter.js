import { useState } from 'react';

const SupportingCharacter = () => {

    const supportingCharacters = [
        'Pigbin Josh',
        "Choking on an Olive woman from 'The Lazarus Experiment'",
        "That pirate who disappears for ages",
        'Angie and Artie Maitland',
        "Richard Nixon",
        "Kebab Man from 'The Woman Who Fell To Earth'",
        "Commander Maxil's hat",
        "Baby Benton",
        'Pete the Morgue Attendant',
        "Daniel Barton's mum",
        "Noor Inayat Khan",
        'Any of the Class cast who are available',
        'Gilbert M'
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