import React, { ReactEventHandler } from "react";
import style from "./Header.module.css";
import Container from "../../layout/Container";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { selectIsAuth, signout } from "../../store/slices/authSlice";
import { NavLink } from "react-router-dom";
import { guidesLinkRoutes, journalsLinkRoutes } from "../../utils/constants/routes";
import Dropdown from "../Dropdown/Dropdown";

const Header: React.FC = () => {
	const [menu, setMenu] = React.useState(false);

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
				{/* <button className={style.item}>Журналы</button>
				{menu && (
					<ul className={style.dropDownMenu}>
						{journalsLinkRoutes.map((route, index) => (
							<li key={index}>
								<NavLink to={route.to}>{route.name}</NavLink>
							</li>
						))}
					</ul>
				)}
				<button className={style.item}>Журналы</button>
				{menu && (
					<ul className={style.dropDownMenu}>
						{guidesLinkRoutes.map((route, index) => (
							<li key={index}>
								<NavLink to={route.to}>{route.name}</NavLink>
							</li>
						))}
					</ul>
				)} */}
				<Dropdown title="Журналы" items={journalsLinkRoutes} />
				<Dropdown title="Справочник" items={guidesLinkRoutes} />
			</Container>
		</header>
	);
};

export default Header;
