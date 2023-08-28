const PithyFooterQuotes = () => {

    const footerQuotes = [
        "Matt Fitton hasn't seen his kids in years.",
        "We didn't know RTD was coming back",
        "We've adopted Jon Culshaw and he has expensive tastes",
        "our children need wine",
        'a big Welsh Man stole Rob shearman',
        "we're this close to getting Saward to write Time Inc. as a Lost Story",
        "john dorney is starting to like the idea of becoming a cyberman",
        "'i can't believe i just tried this and got close to a genuine leak' - BigFinishInsider",
        'bob baker somehow keeps pitching us k9 stuff',
        "Eccleston scares us"
        
    ];

        const randomIndex = Math.floor(Math.random() * footerQuotes.length);
        const selectedQuote = footerQuotes[randomIndex];  

   
    return (
        <>{selectedQuote}</>
        );
}
 
export default PithyFooterQuotes;