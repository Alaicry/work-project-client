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
		<header className="py-[10px]">
			<Container>
				<nav className="nav">
					<ul className="flex items-center justify-between">
						{navLinkRoutes.map((route, index) => (
							<li className="py-[5px]" key={index}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "p-[7.5px] rounded-md bg-orange-200 font-medium"
											: "p-[7.5px] rounded-md hover:bg-orange-200"
									}
									to={route.path}
								>
									{route.name}
								</NavLink>
							</li>
						))}
						<li className="p-[7px] rounded-md hover:bg-orange-200">
							{!isAuth ? (
								<button
									className="cursor-pointer focus:outline-none"
									onClick={toggleModal}
								>
									Авторизация
								</button>
							) : (
								<button
									className="cursor-pointer focus:outline-none"
									onClick={onClickLogout}
								>
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
