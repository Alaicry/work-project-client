import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../store/slices/authSlice";
import { Navigate } from "react-router-dom";

const AuthForm = () => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<h4>Вход в аккаунт</h4>
			<label>
				Адрес электронной почты
				<input
					type="email"
					aria-invalid={errors.email ? true : false}
					{...register("email", {
						required: "Укажите почту",
					})}
				/>
				{errors.email && <p>{errors.email?.message}</p>}
			</label>
			<label>
				Пароль
				<input
					type="password"
					aria-invalid={errors.password ? true : false}
					{...register("password", {
						required: "Укажите пароль",
					})}
				/>
				{errors.password && <p>{errors.password?.message}</p>}
			</label>
			<button type="submit">Войти</button>
		</form>
	);
};

export default AuthForm;
