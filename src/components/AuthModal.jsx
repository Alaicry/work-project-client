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
		<div className="">
			<form className="" onSubmit={handleSubmit(onSubmitAuth)}>
				<h2 className="">Войдите в свой аккаунт</h2>
				<div className="">
					<div className="">
						<label className="">Адрес электронной почты</label>
						<input
							type="text"
							className=""
							placeholder="Введите почту"
							{...register("email", { required: "Укажите почту" })}
						/>
						{errors.email && <p className="">{errors.email.message}</p>}
					</div>
					<div className="">
						<label className={style.label}>Пароль</label>
						<input
							type="password"
							className=""
							placeholder="Введите пароль"
							{...register("password", { required: "Укажите пароль" })}
						/>
						{errors.password && <p className="">{errors.password.message}</p>}
					</div>
					<button type="submit" className="">
						Войти
					</button>
					<button type="button" className="" onClick={toggleModal}>
						<RxCross1 />
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthModal;
