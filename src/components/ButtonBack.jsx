import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const ButtonBack = () => {
	const navigate = useNavigate();
	return (
		<button
			className="absolute top-[20px] left-[30px] bg-white p-2 rounded-md hover:bg-slate-100 flex items-center justify-center gap-1 text-sm transition-all ease-linear delay-[0.15s]"
			onClick={() => navigate(-1)}
		>
			<IoIosArrowRoundBack className="w-[20px] h-[20px]" />
			Назад
		</button>
	);
};

export default ButtonBack;
