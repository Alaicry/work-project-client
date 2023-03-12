import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { fetchAuth, selectIsAuth } from "../store/slices/authSlice";

const Auth: React.FC = () => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: "test@test.com",
			password: "123456qqq",
		},
		mode: "all",
	});

	const onSubmit = async (values) => {
		const data = await dispatch(fetchAuth(values));
		if (!data.payload) {
			alert("Не удалось авторизоваться");
		}
		if ("token" in data.payload) {
			window.localStorage.setItem("token", data.payload?.token);
		}
	};

	if (isAuth) {
		return <Navigate to="/" />;
	}

	return (
		<section className="auth">
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h4 className="title">Вход в аккаунт</h4>
				<label className="label">
					Адрес электронной почты
					<input
						type="email"
						aria-invalid={errors.email ? true : false}
						className="input input-reset"
						{...register("email", {
							required: "Укажите почту",
						})}
					/>
					{errors.email && <p className="error">{errors.email?.message}</p>}
				</label>
				<label className="label">
					Пароль
					<input
						type="password"
						aria-invalid={errors.password ? true : false}
						className="input input-reset"
						{...register("password", {
							required: "Укажите пароль",
						})}
					/>
					{errors.password && <p className="error">{errors.password?.message}</p>}
				</label>
				<button type="submit" className="button button-reset form__button">
					Войти
				</button>
			</form>
		</section>
	);
};

export default Auth;
