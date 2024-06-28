import React from 'react';
// import React from './'
import '../App.css'

const Image = (props) => {
    
    const style = {
        width: "100px",
        height:"100px",
        borderRadius: "50%"
    };
    return (
        <div className='circle' >
            <img className = "image" src={props.src} alt="" style={style}/>
        </div>
    );
}

export default Image;