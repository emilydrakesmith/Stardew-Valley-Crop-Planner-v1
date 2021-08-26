import React, { useState } from 'react';

import './Landing.css';

function Landing() {
    const [numberAcross, setNumberAcross] = useState(0);

    return (
        <>
            <label htmlFor='boxes-across'>Across (1-20):</label>
            <input type='number' id='boxes-across' name='boxes-across' min='1' max='20' />

            <button onClick={() => setNumberAcross(document.getElementById('boxes-across').value)}>Make Grid!</button>
            <p>Across: {numberAcross}</p>
        </>
    );
}

export default Landing;