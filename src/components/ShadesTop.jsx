import React from "react";

const ShadesTop = (props) => {
	return (
		<div className="shades-top">
			<input
				className="shades-search-bar"
				onChange={props.onChange}
				type="text"
				placeholder="Search for color"
			/>
		</div>
	);
};

export default ShadesTop;
