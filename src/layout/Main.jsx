import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<React.Fragment>
			<Header />
			<section>
				<Container>
					<Outlet />
				</Container>
			</section>
		</React.Fragment>
	);
};

export default Main;
