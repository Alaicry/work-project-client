import React, { ReactEventHandler } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { selectIsAuth, selectUserData, signout } from "../../store/slices/authSlice";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import Container from "../Container";
import { navLinkRoutes } from "../../utils/constants/routes";

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
		<header className={style.header}>
			<Container>
				<nav className={style.nav}>
					<ul className={style.menu}>
						{navLinkRoutes.map((route, index) => (
							<li className={style.menuItem} key={index}>
								<NavLink
									className={({ isActive }) =>
										isActive ? `${style.menuLink} ${style.menuLinkActive}` : `${style.menuLink}`
									}
									to={route.path}
								>
									{route.name}
								</NavLink>
							</li>
						))}
						{!isAuth ? (
							<li className={style.menuItem}>
								<NavLink
									className={({ isActive }) =>
										isActive ? `${style.menuLink} ${style.menuLinkActive}` : `${style.menuLink}`
									}
									to="/auth/signin"
								>
									Авторизация
								</NavLink>
							</li>
						) : (
							<li className={style.menuItem}>
								<NavLink className={style.menuLink} to="#" onClick={onClickLogout}>
									Выход
								</NavLink>
							</li>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
