import React from "react";
import "../Styles/AntDesign.css";
import '../Styles/ButtonStyles.css'

const EditAccountButton = () => {
	const handleOnClick = (event) => {
		event.preventDefault();
		alert("Account Edited");
	};

	return (
		<div>
			<button type="button" className="simple" onClick={(event) => handleOnClick(event)}>
				Edit Account
			</button>
		</div>
	);
};

export default EditAccountButton;
