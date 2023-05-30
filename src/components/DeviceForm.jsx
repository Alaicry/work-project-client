import React from "react";
import { useDispatch } from "react-redux";
import { IoCaretForwardOutline, IoCaretDownOutline } from "react-icons/io5";

const DeviceForm = () => {
	const [form, setForm] = React.useState(false);
	const dispatch = useDispatch();

	return (
		<React.Fragment>
			<button
				className="flex items-center gap-1 font-medium mb-3"
				onClick={() => setForm(!form)}
			>
				Открыть форму
				{form ? (
					<IoCaretDownOutline className="w-5 h-5" />
				) : (
					<IoCaretForwardOutline className="w-5 h-5" />
				)}
			</button>
			{form && (
				<form className="flex flex-col">
					<div className="mb-4 p-4 bg-gray-100 rounded-md flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label className="font-medium">Производитель</label>
							<input type="text" className="h-10 rounded-md pl-[20px] focus:outline-zinc-400" />
						</div>
						<div className="flex flex-col gap-2">
							<label className="font-medium">Марка</label>
							<input type="text" className="h-10 rounded-md pl-[20px] focus:outline-zinc-400" />
						</div>
						<div className="flex flex-col gap-2">
							<label className="font-medium">Модель</label>
							<input type="text" className="h-10 rounded-md pl-[20px] focus:outline-zinc-400" />
						</div>
						<div className="flex flex-col gap-2">
							<label className="font-medium">Тип устройства</label>
							<select
								name="deviceType"
								defaultValue="terminal"
								className="h-10 rounded-md pl-[20px]"
							>
								<option value="sensor">Датчик</option>
								<option value="terminal">Терминал</option>
							</select>
						</div>
					</div>
					<div className="flex flex-col gap-2">
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
