/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './CropGrid.css';
import CropColumn from '../CropColumn/CropColumn';
/******* END: IMPORT LOCAL FILES *********/

function CropGrid(props) {
    console.log(`numberOfColumns: ${props.numberOfColumns}`);
    return (
        <div id='crop-grid'>
            <CropColumn numberOfRows={props.numberOfRows}/>
        </div>
    );
}

export default CropGrid;