import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShadesItem = (props) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	const onCopy = () => {
		handleCopy();
		props.onColorCopy();
	};

	return (
		<CopyToClipboard text={props.shade.hexString()} onCopy={onCopy}>
			<div className="shade" style={{ backgroundColor: props.shade.hexString() }}>
				{copied ? <span className="copied">copied!</span> : <span>{props.shade.hexString()}</span>}
			</div>
		</CopyToClipboard>
	);
};

export default ShadesItem;
