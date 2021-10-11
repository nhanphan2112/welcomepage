import React from "react";
import "../Styles/AntDesign.css";
import { Button } from "antd";

const EditAccountButton = () => {
	const handleOnClick = (event) => {
		event.preventDefault();
		alert("Account Edited");
	};

	return (
		<div>
			<Button type="primary" onClick={(event) => handleOnClick(event)}>
				Edit Account
			</Button>
		</div>
	);
};

export default EditAccountButton;
