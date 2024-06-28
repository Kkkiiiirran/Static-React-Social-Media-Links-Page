import React from 'react';

const ProfileName = (props) => {
    const style ={
        fontSize: "1.8em",
        fontWeight: "bold"
        

    }
    return (
        <h1 style={style}>{props.name}</h1>
    )
}

export default ProfileName;