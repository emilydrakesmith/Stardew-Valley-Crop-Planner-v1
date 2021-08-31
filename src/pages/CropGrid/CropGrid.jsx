/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React, { useState, useEffect, useTable, useMemo } from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './CropGrid.css';
// import CropColumn from '../CropColumn/CropColumn';
/******* END: IMPORT LOCAL FILES *********/

function CropGrid(props) {
    const { numberOfColumns, numberOfRows } = props;            // destructure number of boxes down and across from props
    
    console.log(`numberOfColumns: ${numberOfColumns}`);
    console.log(`numberOfRows: ${numberOfRows}`);

    function makeGrid(numAcross, numDown) {
        const cellCount = numAcross * numDown;
        const cellCountArray = new Array(cellCount).fill(0);
        const rowCountArray = new Array(numAcross).fill(1);
    }

    useEffect(() => {
        makeGrid(numberOfColumns, numberOfRows);
    })

    return (
        <div id='crop-grid'>
        </div>
    );
}

export default CropGrid;