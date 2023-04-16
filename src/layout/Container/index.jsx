import React from "react";
import style from "./Container.module.css";

const Container = ({ children, classNameToProps }) => {
	return (
		<div
			className={classNameToProps ? `${classNameToProps} ${style.container}` : `${style.container}`}
		>
			{children}
		</div>
	);
};

export default Container;
