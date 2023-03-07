import React, { useState, useEffect } from "react";
import "./App.css";
import ShadesTop from "./components/ShadesTop";
import Shades from "./components/Shades";
import randomColor from "randomcolor";

const App = () => {
	const [color, setColor] = useState();

	useEffect(() => {
		setColor(randomColor);
	}, []);

	const handleColorChange = (e) => {
		setColor(e.target.value);
	};

	return (
		<div className="App">
			<ShadesTop color={color} onChange={handleColorChange} />
			<Shades color={color} />
		</div>
	);
};

export default App;
