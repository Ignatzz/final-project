import React from "react";

const Row = props => {
    return <div className={`row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
    </div>
}

const Col = props => {
    return <div className={`col${props.fluid ? "-fluid" : ""}`}>
    {props.children}
    </div>
}

export {Row}

export {Col}