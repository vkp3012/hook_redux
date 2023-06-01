import React, { memo } from "react";

const Child = (props) => {
    const { callback } = props;
    console.log("Component render")
    return (
        <h2>Child Component</h2>
    )
}

export default memo(Child) 