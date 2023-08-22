import { useState } from 'react';

const MainCharacter = () => {

    const mainCharacters = [
        'The Tenth Doctor',
        'River Song',
        'Dalek Caan',
        'The Morbius Doctors',
        'Captain Archibald Hamish Lethbridge-Stewart',
        'An unassuming writer/director/producer plus actor in his sixties',
        'Pigbin Josh',
        "The Companions' Rebound Support Group", 
        'Young Soldeed'
                   

    ];

    const [mainCharacter, setMainCharacter] = useState("")

    function get_random_main_character() {
        const randomIndex = Math.floor(Math.random() * mainCharacters.length);
        const selectedCharacter = mainCharacters[randomIndex]
        setMainCharacter(selectedCharacter)
    }

    return ( 
         <>
   
        </>    
    );
}
 
export default MainCharacter;