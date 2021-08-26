import React, { useState } from 'react';

import './Landing.css';

function Landing() {
    const [numberAcross, setNumberAcross] = useState(0);
    const [numberDown, setNumberDown] = useState(0);

    const getGridSize = () => {
        setNumberAcross(document.getElementById('boxes-across').value);
        setNumberDown(document.getElementById('boxes-down').value);
    }

    return (
        <>
            <label htmlFor='boxes-across'>Across (1-20):</label>
            <input type='number' id='boxes-across' name='boxes-across' min='1' max='20' />

            <br />

            <label htmlFor='boxes-down'>Down (1-20):</label>
            <input type='number' id='boxes-down' name='boxes-down' min='1' max='20' />

            <br />

            <button onClick={getGridSize}>Make Grid!</button>

            <hr />

            <p>Across: {numberAcross}</p>
            <p>Down: {numberDown}</p>
        </>
    );
}

export default Landing;