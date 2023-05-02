import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const ButtonBack = () => {
	const navigate = useNavigate();
	return (
		<button
			className="absolute top-[12px] left-[200px] bg-white p-3 rounded-md hover:bg-slate-100 flex items-center justify-center gap-1 text-base transition-all ease-linear delay-[0.15s]"
			onClick={() => navigate(-1)}
		>
			<IoIosArrowRoundBack className="w-[30px] h-[30px]" />
			Назад
		</button>
	);
};

export default ButtonBack;
