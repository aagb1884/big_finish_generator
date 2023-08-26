import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const Screengrab = ({ componentRef }) => {
    const screengrabAndCopy = async () => {
        const canvas = await html2canvas(componentRef.current);
        canvas.toBlob(blob => {
            const item = new ClipboardItem({ 'image/png': blob });
            navigator.clipboard.write([item]);
        });
    };

    return (
        <section className='screengrab'>
        <p>Takes a screengrab and copies it to the clipboard.</p>
        <button onClick={screengrabAndCopy}>Screengrab</button>
        </section>
    );
};
 
export default Screengrab;