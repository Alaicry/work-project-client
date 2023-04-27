import React from "react";
import { guideLinks } from "../utils/constants/routes";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Guide = () => {
	return (
		<ul className="list-none flex flex-col gap-3 py-1">
			{guideLinks.map((route) => (
				<li
					className="bg-gray-200 p-2 rounded-md hover:bg-gray-100"
					key={route.path}
				>
					<Link className="flex items-center gap-2" to={route.path}>
						{route.name} <FiArrowRight className="w-5 h-5" />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Guide;
