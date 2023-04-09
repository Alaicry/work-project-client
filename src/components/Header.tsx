import React from "react";
import { useSelector } from "react-redux";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAppDispatch } from "../store";
import { selectIsAuth, signout } from "../store/slices/authSlice";
import { navLinkRoutes } from "../utils/constants/routes.constants";
import { Box, Button, Container, Link, ListItem, UnorderedList } from "@chakra-ui/react";

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
		<Box as="header" paddingY="10px" fontWeight="500" lineHeight="1.25">
			<Container
				maxW="1280px"
				marginX="auto"
				marginY="0"
				paddingX="30px"
				paddingY="5px"
				borderRadius="10px"
				backgroundColor="#fff"
			>
				<Box as="nav">
					<UnorderedList
						margin="0"
						display="flex"
						alignItems="center"
						listStyleType="none"
						justifyContent="space-between"
					>
						{navLinkRoutes.map((elem) => (
							<ListItem
								key={elem.name}
								paddingY="5px"
								paddingX="10px"
								borderRadius="6px"
								transition="all ease 0.3s"
								_hover={{ backgroundColor: "#f0c3ac" }}
							>
								<Link
									as={RouterNavLink}
									to={elem.to}
									textDecoration="none"
									_hover={{ textDecoration: "none" }}
								>
									{elem.name}
								</Link>
							</ListItem>
						))}
						{!isAuth && (
							<ListItem
								paddingY="5px"
								paddingX="10px"
								borderRadius="6px"
								transition="all ease 0.3s"
								_hover={{ backgroundColor: "#f0c3ac" }}
							>
								<Link
									as={RouterNavLink}
									to="/auth/signin"
									textDecoration="none"
									_hover={{ textDecoration: "none" }}
								>
									Вход
								</Link>
							</ListItem>
						)}
					</UnorderedList>
				</Box>
			</Container>
		</Box>
	);
};

export default Header;
