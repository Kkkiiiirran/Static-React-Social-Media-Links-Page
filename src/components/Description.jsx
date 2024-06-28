import React from "react";

const Description = (props) => {
    const style ={
        fontSize: "14px",
        

    }
    return (
        <p style={style}>{props.desc}</p>
    )
}


export default Description;