import React from "react";
import Container from "../../layout/Container";
import style from "./Footer.module.css";
const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={style.footer}>
			<Container classNameFromProps={style.container}>
				<small className={style.copyright}>@{currentYear}</small>
			</Container>
		</footer>
	);
};

export default Footer;
