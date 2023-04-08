import React from "react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<div>
				<small>@{currentYear}</small>
			</div>
		</footer>
	);
};

export default Footer;
