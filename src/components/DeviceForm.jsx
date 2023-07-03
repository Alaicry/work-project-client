import React from "react";
import { useDispatch } from "react-redux";
import { IoCaretForwardOutline, IoCaretDownOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { fetchAddDevice, fetchDevicesData } from "../store/slices/guideSlice";

const DeviceForm = () => {
	const [form, setForm] = React.useState(false);
	const dispatch = useDispatch();
	const onSubmitAdd = async (values) => {
		dispatch(fetchAddDevice(values));
		dispatch(fetchDevicesData());
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			manufacturerName: "",
			deviceBrand: "",
			deviceModel: "",
			deviceType: "terminal",
		},
		mode: "all",
	});

	return (
		<React.Fragment>
			<button
				className="button-reset devices-guide__button"
				onClick={() => setForm(!form)}
			>
				Открыть форму
				{form ? (
					<IoCaretDownOutline className="devices-guide__icon" />
				) : (
					<IoCaretForwardOutline className="devices-guide__icon" />
				)}
			</button>
			{form && (
				<form
					className="devices-guide__form"
					onSubmit={handleSubmit(onSubmitAdd)}
				>
					<div className="devices-guide__form-wrapper devices-guide__form-wrapper--rounded devices-guide__form-wrapper--flex">
						<div className="devices-guide__field">
							<label className="font-medium">Производитель</label>
							<input
								type="text"
								className="devices-guide__input"
								{...register("manufacturerName", {
									required: "Укажите производителя",
								})}
							/>
						</div>
						<div className="devices-guide__field">
							<label className="font-medium">Марка</label>
							<input
								type="text"
								className="h-10 rounded-md pl-[20px] focus:outline-zinc-400"
								{...register("deviceBrand", {
									required: "Укажите марку оборудования",
								})}
							/>
						</div>
						<div className="devices-guide__field">
							<label className="font-medium">Модель</label>
							<input
								type="text"
								className="h-10 rounded-md pl-[20px] focus:outline-zinc-400"
								{...register("deviceModel", {
									required: "Укажите модель оборудования",
								})}
							/>
						</div>
						<div className="devices-guide__field">
							<label className="font-medium">Тип устройства</label>
							<select
								name="deviceType"
								value="terminal"
								// defaultValue="terminal"
								className="h-10 rounded-md pl-[20px]"
								{...register("deviceType", {
									required: "Укажите модель оборудования",
								})}
							>
								<option value="sensor">Датчик</option>
								<option value="terminal">Терминал</option>
							</select>
						</div>
					</div>
					<div className="devices-guide__field">
						<button
							type="submit"
							className="text-center mx-auto py-3 px-3 bg-orange-200 rounded-md"
						>
							Добавить
						</button>
					</div>
				</form>
			)}
		</React.Fragment>
	);
};

export default DeviceForm;
