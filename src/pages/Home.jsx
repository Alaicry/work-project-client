import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Home = ({ list }) => {
	return (
		<ul className="list-reset list">
			{list.map((route) => (
				<li className="list__item" key={route.path}>
					<Link className="list__link" to={route.path}>
						{route.name} <FiArrowRight className="icon" />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Home;
