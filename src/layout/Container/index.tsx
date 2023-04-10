import React from "react";

import style from "./Container.module.css";

interface IContainerProps {
	children: React.ReactNode;
	classNameFromProps?: string;
}
const Container: React.FC<IContainerProps> = ({ children, classNameFromProps }) => {
	return (
		<div
			className={
				classNameFromProps ? `${classNameFromProps} ${style.container}` : `${style.container}`
			}
		>
			{children}
		</div>
	);
};

export default Container;
