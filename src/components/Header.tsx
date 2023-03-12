import React from "react";
import { NavLink } from "react-router-dom";
import { navLinkRoutes } from "../utils/constants/routes";

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header__container container container--rounded">
				<nav className="nav">
					<ul className="menu menu-reset">
						{navLinkRoutes.map((route, index) => (
							<li className="menu__item" key={index}>
								<NavLink
									to={route.to}
									className={({ isActive }) =>
										isActive ? "menu__link menu__link--active link-reset" : "menu__link link-reset"
									}
								>
									{route.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
