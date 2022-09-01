import React, { Component } from 'react';
import Box from './box';

// 可以直接
const Boxes = ({boxes, onReset, onClickLeft, onClickRight, onDelete}) => {
    return (  <React.Fragment>
                <button onClick={onReset} className='btn btn-info m-2'>reset</button>
               
                {boxes.map(box => (
                    <Box 
                        key={box.key} 
                        x={box.x}
                        id={box.key}
                        box={box}
                        onLeft={() => onClickLeft(box)}
                        onRight={() => onClickRight(box)}
                        onDelete={onDelete}
                    >
                        <h1>title</h1>
                        <p>#{box.x}</p>
                        
                    </Box>
                ))}
               
            </React.Fragment>);
}
 
export default Boxes ;
