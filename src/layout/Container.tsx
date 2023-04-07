import React from "react";

interface IContainerProps {
	children: React.ReactNode;
	classNameFromProps?: string;
}

const Container: React.FC<IContainerProps> = ({ children, classNameFromProps }) => {
	return (
		<div className={classNameFromProps ? `container ${classNameFromProps}` : "container"}>
			{children}
		</div>
	);
};

export default Container;
