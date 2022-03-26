import React from 'react';
import '../css/outputrow.css'

const OutputRow = props =>  {
        return (
            <div>
                <input type="text" readOnly className='screen' style={props.textSize} value={props.value}/>
            </div>
        );
    }


export default OutputRow;