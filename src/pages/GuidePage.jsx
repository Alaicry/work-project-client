import React from "react";
import Links from "../components/Links";
import { guideLinks } from "../utils/constants/routes";

const GuidePage = () => {
	return <Links links={guideLinks} />;
};

export default GuidePage;
