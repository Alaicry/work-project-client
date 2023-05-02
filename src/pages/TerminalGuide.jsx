import React from "react";
import ButtonBack from "../components/ButtonBack";
import { useDispatch, useSelector } from "react-redux";
import { clearData, fetchTerminalData } from "../store/slices/guideSlice";

const TerminalGuide = () => {
	const dispatch = useDispatch();
	const { list } = useSelector((state) => state.guide);
	console.log(list);

	React.useEffect(() => {
		dispatch(fetchTerminalData());

		return () => dispatch(clearData());
	}, []);
	return (
		<div className="p-2">
			<ButtonBack />
			<ol className="flex flex-col gap-2 list-decimal list-inside">
				{list.map((elem) => (
					<li key={elem._id} className="p-1">
						<span className="mr-2 font-bold">{elem.manufacturerName}</span>
						<span className="mr-2 font-medium">{elem.deviceBrand}</span>
						<span className="font-normal">{elem.deviceModel}</span>
					</li>
				))}
			</ol>
		</div>
	);
};

export default TerminalGuide;
