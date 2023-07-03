import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearData, fetchDevicesData } from "../store/slices/guideSlice";

const DeviceList = () => {
	const dispatch = useDispatch();

	const { list } = useSelector((state) => state.guide);

	const { pathname } = useLocation();
	const param = pathname.replace("/guide/", "");

	React.useEffect(() => {
		dispatch(fetchDevicesData(param));
		return () => dispatch(clearData());
	}, [dispatch]);

	return (
		<ol className="flex flex-col gap-2 list-decimal list-inside">
			{list.map((elem) => (
				<li key={elem._id} className="p-1">
					<span className="mr-2 font-bold">{elem.manufacturerName}</span>
					<span className="mr-2 font-medium">{elem.deviceBrand}</span>
					<span className="font-normal">{elem.deviceModel}</span>
				</li>
			))}
		</ol>
	);
};

export default DeviceList;
