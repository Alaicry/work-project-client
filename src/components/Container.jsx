import React from "react";

const Container = ({ children, classNameToProps }) => {
	return (
		<div
			className={
				classNameToProps
					? `container ${classNameToProps}`
					: "container"
			}
		>
			{children}
		</div>
	);
};

export default Container;
