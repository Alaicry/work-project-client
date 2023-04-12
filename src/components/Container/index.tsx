import React from "react";
import style from "./Container.module.css";

interface IContainerProps {
	children: React.ReactNode;
	classNameToProps?: string;
}

const Container: React.FC<IContainerProps> = ({ children, classNameToProps }) => {
	return (
		<div
			className={classNameToProps ? `${classNameToProps} ${style.container}` : `${style.container}`}
		>
			{children}
		</div>
	);
};

export default Container;
