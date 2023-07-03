import React from "react";
import ButtonBack from "../components/ButtonBack";
import DeviceForm from "../components/DeviceForm";
import DeviceList from "../components/DeviceList";

const DevicesGuide = () => {
	return (
		<div className="devices-guide">
			<ButtonBack />
			<DeviceForm />
			<DeviceList />
		</div>
	);
};

export default DevicesGuide;
