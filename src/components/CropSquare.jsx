/******* START: IMPORT REACT, HOOKS, AND DONGLES *******/
import React from 'react';
/******* END: IMPORT REACT, HOOKS, AND DONGLES *********/


/******* START: IMPORT LOCAL FILES *******/
import './CropSquare.css';
/******* END: IMPORT LOCAL FILES *********/


/**     FUTURE PLANS!
 *          I intend to have a CSS class for every possible crop.  The user will click a crop making that
 *          the 'active' crop in state, then the click handler remove the current crop class (if one is
 *          currently applied) and apply the class for the crop currently held in state.  This will get
 *          tricky as it's not the only className value applied.  There are a few workaround for how I
 *          might accomplish this.
 *              1. Use the 'style' attribute to add CSS style from a library directly.  This means holding
 *                 style data in a store, not in the CSS file, which actually might be easier.  Especially
 *                 if I render a styled <div>.  But this may be problematic if I need an attribute in the
 *                 <div> for other identification functions which seems likely.
 *              2. Remove all CSS classes and re-add 'crop-grid-square' with the specific crop class.
 *              3. Remove all CSS classes NOT 'crop-grid-square' then add the specific crop class.
 *              4. Check for every single crop class and remove if present, then add the current crop class
 *                 being held in state.
 *              5. Is there a way to use state to hold the current crop class, then combine that into a
 *                 string with 'crop-grid-square' (space separated) and insert the string as a class?  Might
 *                 work with useEffect.
 *          IMPORTANT!
 *              Whatever I do, I need to be careful about issues with the page looking funny if noticeable
 *              time passes between one class being stripped and the next being added.  If I iterate through
 *              all possible classes, make sure the break the loop when a class is found and removed.  Probably
 *              need to pass the value to a variable outside the loop, terminate the loop, then add and remove
 *              relevant classes.
 */


function CropSquare(props) {
    const {squareNumber} = props;
    const idString = `crop-grid-square-${squareNumber}`;

    function handleClick(event) {
        const clickedSquare = event.target;
        clickedSquare.classList.toggle('red-background');
    }

    return (
        <div className='crop-grid-square' id={idString} onClick={event => handleClick(event)} />
    );
}

export default CropSquare;