import React, { useEffect, useState, useRef } from "react";
import Values from "values.js";
import isColor from "is-color";
import ShadesItem from "./ShadesItem";

const Shades = (props) => {
	const [shades, setShades] = useState([]);
	const audioRef = useRef();

	useEffect(() => {
		if (isColor(props.color)) createShades();
	}, [props.color]);

	const createShades = (color) => {
		const shades = new Values(props.color).shades(1);
		setShades(shades);
	};

	const onColorCopy = () => {
		audioRef.current.play();
	};

	return (
		<div className="shades">
			<audio ref={audioRef} src={require("../assets/clicked-sound.mp3")} />
			{shades.map((shade, index) => (
				<ShadesItem shade={shade} key={index} onColorCopy={onColorCopy} />
			))}
		</div>
	);
};

export default Shades;
