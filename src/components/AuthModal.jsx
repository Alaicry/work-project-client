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
		<div className="modal modal--visible">
			<form
				className="auth-form auth-form--relative auth-form--rounded"
				onSubmit={handleSubmit(onSubmitAuth)}
			>
				<button
					type="button"
					className="button-reset auth-form__button auth-form__button--flex auth-form__button--rounded"
					onClick={toggleModal}
				>
					<RxCross1 className="icon" />
				</button>
				<h2 className="auth-form__title">Войдите в свой аккаунт</h2>
				<div className="auth-form__wrapper">
					<div className="auth-form__field">
						<label className="text text--label">Адрес электронной почты</label>
						<input
							type="text"
							className="input"
							placeholder="Введите почту"
							{...register("email", { required: "Укажите почту" })}
						/>
						{errors.email && (
							<p className="text text--error">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="auth-form__field">
						<label className="text text--label">Пароль</label>
						<input
							type="password"
							className="input"
							placeholder="Введите пароль"
							{...register("password", { required: "Укажите пароль" })}
						/>
						{errors.password && (
							<p className="text text--error">
								{errors.password.message}
							</p>
						)}
					</div>
					<button type="submit" className="button-reset auth-form__button-submit">
						Войти
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthModal;
