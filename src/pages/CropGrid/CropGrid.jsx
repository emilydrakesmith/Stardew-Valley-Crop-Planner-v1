/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './CropGrid.css';
import CropSquare from '../../components/CropSquare';
/******* END: IMPORT LOCAL FILES *********/

function CropGrid(props) {
    const { numberOfColumns, numberOfRows } = props;            // destructure number of boxes down and across from props

    const squares = new Array(numberOfColumns * numberOfRows).fill(1);
    const cropSquares = squares.map((square, idx) => <CropSquare squareNumber={idx} key={`crop-square-${idx+1}`} />)

    document.documentElement.style.setProperty('--rows', numberOfRows);
    document.documentElement.style.setProperty('--columns', numberOfColumns);

    return (
        <div id='crop-grid'>
            {cropSquares}
        </div>
    );
}

export default CropGrid;