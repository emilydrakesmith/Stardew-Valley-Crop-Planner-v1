/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React, { useState } from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './Landing.css';
/******* END: IMPORT LOCAL FILES *********/


/**     IMPORTANT!
  *         Right now I'm doing most of the coding in a single page for proof-of-concept that
  *         I can make the code work.  At a later time I expect to do additional work to
  *         achieve better separation of concerns and divde the code into individual components.
*/


function Landing() {
    const [numberAcross, setNumberAcross] = useState(0);                    // set value for number of boxes across in crop grid
    const [numberDown, setNumberDown] = useState(0);                        // set value for number of boxes down in crop grid

    const getGridSize = () => {                                             // meta function to get both values on button click
        setNumberAcross(document.getElementById('boxes-across').value);         // store user input for across value in state
        setNumberDown(document.getElementById('boxes-down').value);             // store user input for down value in state
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