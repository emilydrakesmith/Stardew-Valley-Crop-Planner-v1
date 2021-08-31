/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React, { useState, useEffect } from 'react';
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
        const squaresBank = makeSquareBank(numAcross, numDown);
        console.log(squaresBank);

        const rowsBank = makeRowBank(numDown);
        console.log(rowsBank);
    }

    function makeSquareBank(across, down) {
        const squaresCount = across * down;
        const squares = [];
        for (let i=0; i<squaresCount; i++) {
            squares.push(
                <div className='crop-grid-square' id={`crop-grid-square-${i+1}`} key={`crop-grid-square-${i+1}`}></div>
            );
        }
        return squares;
    }

    function makeRowBank(down) {
        const rows = [];
        for (let i=0; i<down; i++) {
            rows.push(
                <div className='crop-grid-row' id={`crop-grid-row-${i+1}`} key={`crop-grid-row-${i+1}`}></div>
            );
        }
        return rows;
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