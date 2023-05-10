import React from "react";

const Container = ({ children, classNameToProps }) => {
	return (
		<div
			className={
				classNameToProps
					? `max-w-7xl py-[5px] px-[15px] mx-auto my-0 bg-white rounded-lg ${classNameToProps}`
					: "max-w-7xl py-[10px] px-[15px] mx-auto my-0 bg-white rounded-lg"
			}
		>
			{children}
		</div>
	);
};

export default Container;
