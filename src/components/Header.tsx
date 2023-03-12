import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../store";
import { selectIsAuth, signout } from "../store/slices/authSlice";

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const isAuth = useSelector(selectIsAuth);
	const onClickLogout = () => {
		if (window.confirm("Вы действительно хотите выйти?")) {
			dispatch(signout());
			window.localStorage.removeItem("token");
		}
	};

	return (
		<header className="header">
			<div className="header__container container container--rounded">
				<nav className="nav">
					<ul className="menu menu-reset">
						<li className="menu__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "menu__link menu__link--active link-reset" : "menu__link link-reset"
								}
							>
								Главная
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								to="/employees"
								className={({ isActive }) =>
									isActive ? "menu__link menu__link--active link-reset" : "menu__link link-reset"
								}
							>
								Сотрудники
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								to="/devices"
								className={({ isActive }) =>
									isActive ? "menu__link menu__link--active link-reset" : "menu__link link-reset"
								}
							>
								Типы устройств
							</NavLink>
						</li>
						<li className="menu__item">
							{isAuth ? (
								<a onClick={onClickLogout} className="menu__link button-reset">
									Выход
								</a>
							) : (
								<NavLink
									to="/auth/signin"
									className={({ isActive }) =>
										isActive ? "menu__link menu__link--active link-reset" : "menu__link link-reset"
									}
								>
									Вход
								</NavLink>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
