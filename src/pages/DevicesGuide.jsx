import React from "react";
import ButtonBack from "../components/ButtonBack";
import { useDispatch, useSelector } from "react-redux";
import { clearData, fetchDevicesData } from "../store/slices/guideSlice";
import { useLocation } from "react-router-dom";
import DeviceForm from "../components/DeviceForm";
import Container from "../components/Container";

const DevicesGuide = () => {
	const dispatch = useDispatch();

	const { list } = useSelector((state) => state.guide);
	const { pathname } = useLocation();
	const param = pathname.replace("/guide/", "");

	React.useEffect(() => {
		dispatch(fetchDevicesData(param));
		return () => dispatch(clearData());
	}, []);

	return (
		<div className="p-2">
			<ButtonBack />
			<DeviceForm />
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

export default DevicesGuide;
