import React from "react";
import Container from "../../layout/Container";
import style from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, signout } from "../../store/slices/authSlice";
import { NavLink } from "react-router-dom";
import { navLinkRoutes } from "../../utils/constants/routes";
import AuthModal from "../AuthModal";

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
								<button className={style.menuButton} onClick={toggleModal}>
									Авторизация
								</button>
							</li>
						) : (
							<li className={style.menuItem}>
								<button className={style.menuButton} onClick={onClickLogout}>
									Выход
								</button>
							</li>
						)}
					</ul>
				</nav>
				{modal && <AuthModal toggleModal={toggleModal} modal={modal} />}
			</Container>
		</header>
	);
};

export default Header;
