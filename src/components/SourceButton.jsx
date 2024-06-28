import React, { useState } from "react";

const SourceButton = (props) => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const style = {
        backgroundColor: hover ? "hsl(75, 94%, 57%)": "hsl(0, 0%, 20%)",
        border: "None",
        width: "140%",
        padding: "1rem 1.5rem",
        color: hover? "black":"white",
        borderRadius: "5px",
        fontWeight: "bold"

        

    }
    return (
        <button 
        style={style} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {props.buttonText}
        </button>
    )
}

export default SourceButton;