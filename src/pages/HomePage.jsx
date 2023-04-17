import React from "react";
import Links from "../components/Links";
import { homeLinks } from "../utils/constants/routes";

const HomePage = () => {
	return <Links links={homeLinks} />;
};

export default HomePage;
