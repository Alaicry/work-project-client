import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../store";
import { selectIsAuth, signout } from "../store/slices/authSlice";
import { navLinkRoutes } from "../utils/constants/routes.constants";
import { Box, Container } from "@chakra-ui/react";

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
		<Box as="header">
			<Container maxW="1280px" marginX="auto" marginY="0">
				<Box as="nav">
					<ul>
						{navLinkRoutes.map((elem) => (
							<li key={elem.name}>
								<NavLink to={elem.to}>{elem.name}</NavLink>
							</li>
						))}
						{isAuth ? (
							<li>
								<a onClick={onClickLogout}>Выход</a>
							</li>
						) : (
							<li>
								<NavLink to="/auth/signin">Вход</NavLink>
							</li>
						)}
					</ul>
				</Box>
			</Container>
		</Box>
	);
};

export default Header;
