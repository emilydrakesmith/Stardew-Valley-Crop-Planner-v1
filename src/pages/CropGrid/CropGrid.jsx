/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React, { useState, useEffect } from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './CropGrid.css';
// import CropColumn from '../CropColumn/CropColumn';
/******* END: IMPORT LOCAL FILES *********/

function CropGrid(props) {
    const { numberOfColumns, numberOfRows } = props;            // destructure number of boxes down and across from props

    useEffect(() => {
        makeCssGrid(numberOfRows, numberOfColumns);
        insertSquares();
    })

    function makeCssGrid(rows, columns) {
        document.documentElement.style.setProperty('--rows', rows);
        document.documentElement.style.setProperty('--columns', columns);
    }

    function insertSquares() {
        const elem = document.getElementById('crop-grid');
        elem.innerHTML = "<div class='crop-grid-square'></div>"
    }

    return (
        <div id='crop-grid'>
            
        </div>
    );
}

export default CropGrid;