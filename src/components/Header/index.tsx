import React, { ReactEventHandler } from "react";
import style from "./Header.module.css";
import Container from "../../layout/Container";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { selectIsAuth, signout } from "../../store/slices/authSlice";
import { NavLink } from "react-router-dom";
import {
	guidesLinkRoutes,
	headerLinkRoutes,
	journalsLinkRoutes,
} from "../../utils/constants/routes";

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
			<Container classNameFromProps={style.container}>
				<ul className={style.menu}>
					{headerLinkRoutes.map((route, index) => (
						<li className={style.menuItem} key={index}>
							<NavLink to={route.to} className={style.menuLink}>
								{route.name}
							</NavLink>
						</li>
					))}
				</ul>
			</Container>
		</header>
	);
};

export default Header;
