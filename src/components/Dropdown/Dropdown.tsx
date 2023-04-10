import React from "react";
import { NavLink } from "react-router-dom";

interface IDropdownProps {
	title: string;
	items: {
		to: string;
		name: string;
	}[];
}
const Dropdown: React.FC<IDropdownProps> = ({ title, items }) => {
	const [menu, setMenu] = React.useState(false);
	return (
		<React.Fragment>
			<button onClick={() => setMenu(!menu)}>{title}</button>

			{menu && (
				<ul>
					{items.map((elem, index) => (
						<li key={index}>
							<NavLink to={elem.to}>{elem.name}</NavLink>
						</li>
					))}
				</ul>
			)}
		</React.Fragment>
	);
};

export default Dropdown;
