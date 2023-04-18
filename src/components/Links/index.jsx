import React from "react";
import style from "./Links.module.scss";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

const Links = ({ links }) => {
	return (
		<div className={style.links}>
			<ul className={style.menu}>
				{links.map((link) => (
					<li className={style.menuItem} key={link.name}>
						<Link className={style.menuLink} to={link.path}>
							{link.name}
							<GrLinkNext className={style.icon} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Links;
