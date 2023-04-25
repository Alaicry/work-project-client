import React from "react";
import Container from "../Container";
import style from "./TerminalGuideForm.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getTerminalGuide } from "../../store/slices/terminalGuideSlice";

const TerminalGuideForm = () => {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			manufacturerName: "",
			deviceBrand: "",
			deviceModel: "",
		},
		mode: "onSubmit",
	});

	const postDeviceSubmit = async (values) => {
		const data = await axios.post("http://localhost:4001/devices", values);
		console.log(data);
		console.log(values);
		return data;
	};

	React.useEffect(() => {
		dispatch(getTerminalGuide());
	}, []);

	return (
		<Container>
			<form className={style.form} onSubmit={handleSubmit(postDeviceSubmit)}>
				<div className={style.field}>
					<label className={style.label}>Производитель</label>
					<input
						type="text"
						className={style.input}
						{...register("manufacturerName", {
							required: "Введите имя производителя ",
						})}
					/>
				</div>
				<div className={style.field}>
					<label className={style.label}>Марка</label>
					<input
						type="text"
						className={style.input}
						{...register("deviceBrand", { required: "Введите название марки" })}
					/>
				</div>
				<div className={style.field}>
					<label className={style.label}>Модель</label>
					<input
						type="text"
						className={style.input}
						{...register("deviceModel", {
							required: "Введите название модели",
						})}
					/>
				</div>
				<div>
					<button type="submit">Добавить</button>
				</div>
			</form>
		</Container>
	);
};

export default TerminalGuideForm;
