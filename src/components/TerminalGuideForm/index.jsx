import React from "react";
import Container from "../Container";
import style from "./TerminalGuideForm.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";

const TerminalGuideForm = () => {
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

	const [arr, setArr] = React.useState([]);

	const postDeviceSubmit = async (values) => {
		const data = await axios.post("http://localhost:4001/devices", values);
		console.log(data);
		console.log(values);
		return data;
	};

	React.useEffect(() => {
		axios
			.get("http://localhost:4001/devices", {
				headers: {
					Authorization: window.localStorage.getItem("token"),
				},
			})
			.then((res) => setArr(res.data));
	}, []);

	console.log(arr);
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
			<div>
				{arr.map((elem) => (
					<li key={elem._id}>{elem.deviceBrand}</li>
				))}
			</div>
		</Container>
	);
};

export default TerminalGuideForm;
