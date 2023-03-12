import React from "react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="container container--rounded footer__container">
				<small className="copyright">@{currentYear}</small>
			</div>
		</footer>
	);
};

export default Footer;
