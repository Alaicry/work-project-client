import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Container from "./Container";

const DeviceForm = () => {
	const dispatch = useDispatch();

	return (
		<form>
			<label>Производитель</label>
			<input type="text" />
			<label>Марка</label>
			<input type="text" />
			<label>Модель</label>
			<input type="text" />
			<label>Тип устройства</label>
			<select name="">
				<option value="sensor">Датчик</option>
				<option value="terminal">Терминал</option>
			</select>
		</form>
	);
};

export default DeviceForm;
