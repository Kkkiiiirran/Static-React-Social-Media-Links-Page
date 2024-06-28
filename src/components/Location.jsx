import React from "react";

const Location = (props) => {
    const style ={
        fontWeight: "bold",
        color: "hsl(75, 94%, 57%)"
    }
    return (
        <h2 style={style}>{props.loc}</h2>
    )
}

export default Location;