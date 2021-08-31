/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React, { useState, useEffect } from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './CropGrid.css';
import CropColumn from '../CropColumn/CropColumn';
/******* END: IMPORT LOCAL FILES *********/

function CropGrid(props) {
    console.log(`numberOfColumns: ${props.numberOfColumns}`);
    const [columnsArray, setColumnsArray] = useState([]);

    useEffect(() => createGrid(props.numberOfColumns));

    function createGrid(count) {
        let columns = [];
        for (let i=0; i<count; i++) {
            columns.push(<CropColumn key={`crop-column-${i+1}`} />);
        }
        setColumnsArray(columns);
    }

    return (
        <div id='crop-grid'>
            {columnsArray}
        </div>
    );
}

export default CropGrid;