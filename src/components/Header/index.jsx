import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUserData, signout } from "../../store/slices/authSlice";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import Container from "../Container";
import { navLinkRoutes } from "../../utils/constants/routes";

const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	const [modal, setModal] = React.useState(false);

	const toggleModal = () => setModal(!modal);

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
								<NavLink className={style.menuLink} to="#" onClick={toggleModal}>
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
