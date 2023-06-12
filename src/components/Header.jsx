import React from "react";
import AuthModal from "./AuthModal";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, signout } from "../store/slices/authSlice";
import { NavLink } from "react-router-dom";
import { navLinkRoutes } from "../utils/constants/routes";

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
		<header className="header">
			<Container classNameToProps="container--white container--rounded">
				<nav className="nav">
					<ul className="menu">
						{navLinkRoutes.map((route, index) => (
							<li className="menu__item" key={index}>
								<NavLink
									className={({ isActive }) =>
										isActive ? "menu__link menu__link--active" : "menu__link"
									}
									to={route.path}
								>
									{route.name}
								</NavLink>
							</li>
						))}
						<li className="menu__item menu__link">
							{!isAuth ? (
								<button className="button-reset" onClick={toggleModal}>
									Авторизация
								</button>
							) : (
								<button className="button-reset" onClick={onClickLogout}>
									Выход
								</button>
							)}
						</li>
					</ul>
				</nav>
				{modal && <AuthModal toggleModal={toggleModal} modal={modal} />}
			</Container>
		</header>
	);
};

export default Header;
