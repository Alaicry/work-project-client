import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../store";
import { selectIsAuth, signout } from "../store/slices/authSlice";
import { navLinkRoutes } from "../utils/constants/routes";

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
						{navLinkRoutes.map((elem) => (
							<li className="menu__item" key={elem.name}>
								<NavLink
									to={elem.to}
									className={({ isActive }) =>
										isActive ? "menu__link menu__link--active link-reset" : "menu__link link-reset"
									}
								>
									{elem.name}
								</NavLink>
							</li>
						))}
						{isAuth ? (
							<li className="menu__item">
								<a className="menu__link button-reset" onClick={onClickLogout}>
									Выход
								</a>
							</li>
						) : (
							<li className="menu__item">
								<NavLink
									to="/auth/signin"
									className={({ isActive }) =>
										isActive ? "menu__link menu__link--active link-reset" : "menu__link link-reset"
									}
								>
									Вход
								</NavLink>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
