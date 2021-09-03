/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React, { useState, useEffect } from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './CropSquare.css';
/******* END: IMPORT LOCAL FILES *********/


function CropSquare(props) {
    const [cropClass, setCropClass] = useState(false);

    function sayClicked() {
        console.log('clicked!');
    }

    const {squareNumber} = props;
    const idString = `crop-grid-square-${squareNumber}`;
    return (
        <div className='crop-grid-square' id={idString} key={idString} onClick={() => sayClicked()} />
    );
}

export default CropSquare;