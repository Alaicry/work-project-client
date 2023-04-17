import React from "react";
import style from "./Links.module.css";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

const Links = ({ links }) => {
	return (
		<div className={style.links}>
			<ul className={style.list}>
				{links.map((link) => (
					<li className={style.item} key={link.name}>
						<Link className={style.link} to={link.path}>
							{link.name}
							<GrLinkNext size="15px" />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Links;
