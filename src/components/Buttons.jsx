import React from "react";

const Button = ({ title, background}) => {
    // const {name, value} = title

    return <button style={{background: background}}>{title ? title.value : 'Null'}</button>
}

export default Button 