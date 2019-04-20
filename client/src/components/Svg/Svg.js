import React from "react"
import "./svg.css"

const Svg = () => {
    return(
		<div className="container-fluid row" style={{marginTop: "-5.5em"}}>
    <svg viewBox="0 0 960 600">
	<symbol className="col sm-12" id="s-text">
        <text id="t1" textAnchor="middle" x="50%" y="35%">Journey </text>
        <text id="t2" textAnchor="middle" x="50%" y="60%">Across </text>
        <text id="t3" textAnchor="middle" x="50%" y="90%">Philly </text>
           
	</symbol>

	<g className = "g-ants">
		<use xlinkHref="#s-text" className="text-copy"></use>
		<use xlinkHref="#s-text" className="text-copy"></use>
		<use xlinkHref="#s-text" className="text-copy"></use>
		<use xlinkHref="#s-text" className="text-copy"></use>
		<use xlinkHref="#s-text" className="text-copy"></use>
	</g>
</svg>
</div>

    )
}

export default Svg;