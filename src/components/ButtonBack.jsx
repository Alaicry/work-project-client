import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const ButtonBack = () => {
	const navigate = useNavigate();
	return (
		<button
			className="button-reset button button--absolute button--flex bg-sla"
			onClick={() => navigate(-1)}
		>
			<IoIosArrowRoundBack className="icon button__icon" />
			Назад
		</button>
	);
};

export default ButtonBack;
