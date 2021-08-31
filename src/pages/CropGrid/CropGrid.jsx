/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React, { useState, useEffect } from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './CropGrid.css';
// import CropColumn from '../CropColumn/CropColumn';
/******* END: IMPORT LOCAL FILES *********/

function CropGrid(props) {
    const {numberOfColumns} = props;
    const {numberOfRows} = props;
    
    console.log(`numberOfColumns: ${numberOfColumns}`);
    console.log(`numberOfRows: ${numberOfRows}`);

    function makeBoxes(rowCount, columnCount) {
        const boxCount = rowCount * columnCount;
        console.log(boxCount)
        const boxArray = [];
        for (let i=0; i<boxCount; i++) {
            boxArray.push(
                <div class='crop-grid-box' key={`crop-grid-box-${i+1}`}></div>
            );
        }
        return boxArray;
    }

    useEffect(() => {
        const boxes = makeBoxes(numberOfRows, numberOfColumns);
        console.log(boxes);
    })

    return (
        <div id='crop-grid'>
        </div>
    );
}

export default CropGrid;