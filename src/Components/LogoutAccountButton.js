import React from "react";
import "../Styles/AntDesign.css";
import { Button } from "antd";

const LogoutAccountButton = () => {

	const handleOnClick = (event) => {
		event.preventDefault();
		window.location.href = "https://www.bluebeam.com/";
	};

	return (
		<div>
			<Button type="" onClick={(event) => handleOnClick(event)}>
				Logout
			</Button>
		</div>
	);
};

export default LogoutAccountButton;
