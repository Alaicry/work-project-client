import React from "react";

const Auth: React.FC = () => {
	return (
		<section className="auth">
			<form className="form">
				<h4 className="title">Вход в аккаунт</h4>
				<label className="label">
					Адрес электронной почты
					<input type="email" name="" className="input input-reset" />
				</label>

				<label className="label">
					Пароль
					<input type="text" name="" className="input input-reset" />
				</label>

				<button type="submit" className="button button-reset form__button">
					Войти
				</button>
			</form>
		</section>
	);
};

export default Auth;
