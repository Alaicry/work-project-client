import React from "react";
import style from "./AuthModal.module.scss";
import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../store/slices/authSlice";

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
		<div className={style.modal}>
			<form className={style.form} onSubmit={handleSubmit(onSubmitAuth)}>
				<h2 className={style.title}>Войдите в свой аккаунт</h2>
				<div className={style.formWrapper}>
					<div className={style.field}>
						<label className={style.label}>Адрес электронной почты</label>
						<input
							type="text"
							className={style.input}
							placeholder="Введите почту"
							{...register("email", { required: "Укажите почту" })}
						/>
						{errors.email && <p className={style.error}>{errors.email.message}</p>}
					</div>
					<div className={style.field}>
						<label className={style.label}>Пароль</label>
						<input
							type="password"
							className={style.input}
							placeholder="Введите пароль"
							{...register("password", { required: "Укажите пароль" })}
						/>
						{errors.password && <p className={style.error}>{errors.password.message}</p>}
					</div>
					<button type="submit" className={style.buttonSubmit}>
						Войти
					</button>
					<button type="button" className={style.buttonClose} onClick={toggleModal}>
						<RxCross1 />
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthModal;
