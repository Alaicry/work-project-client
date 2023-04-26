import React from "react";
import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../store/slices/authSlice";

const AuthModal = ({ toggleModal, modal }) => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "all",
	});

	const onSubmitAuth = async (values) => {
		const data = await dispatch(fetchAuth(values));

		if (!data.payload) {
			return alert("Не удалось авторизоваться!");
		}

		if ("token" in data.payload) {
			window.localStorage.setItem("token", data.payload.token);
		} else {
			alert("Не удалось авторизоваться!");
		}
		toggleModal(!modal);
	};

	return (
		<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black-rgba">
			<form
				className="w-[500px] p-[25px] rounded-xl bg-white relative"
				onSubmit={handleSubmit(onSubmitAuth)}
			>
				<button
					type="button"
					className="absolute top-[15px] right-[15px] p-1 flex items-center justify-center rounded-full bg-[#f0f0f0] transition-all ease delay-[0.15s] hover:bg-[#dddddd]"
					onClick={toggleModal}
				>
					<RxCross1 />
				</button>
				<h2 className="font-medium text-center mb-6">Войдите в свой аккаунт</h2>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-2 relative">
						<label className="text-base">Адрес электронной почты</label>
						<input
							type="text"
							className="py-2 px-3 bg-gray-100 rounded-lg focus:outline-none"
							placeholder="Введите почту"
							{...register("email", { required: "Укажите почту" })}
						/>
						{errors.email && (
							<p className="absolute top-[70px] text-sm text-red-400">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="flex flex-col gap-2 relative">
						<label className="text-base">Пароль</label>
						<input
							type="password"
							className="py-2 px-3 bg-gray-100 rounded-lg focus:outline-none"
							placeholder="Введите пароль"
							{...register("password", { required: "Укажите пароль" })}
						/>
						{errors.password && (
							<p className="absolute top-[70px] text-sm text-red-400">
								{errors.password.message}
							</p>
						)}
					</div>
					<button type="submit" className="hover:font-medium">
						Войти
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthModal;
