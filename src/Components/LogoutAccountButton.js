import React from "react";
import "../Styles/AntDesign.css";
import "../Styles/ButtonStyles.css"

const LogoutAccountButton = () => {

	const handleOnClick = (event) => {
		event.preventDefault();
		window.location.href = "https://www.bluebeam.com/";
	};

	return (
		<div>
			<button type="button" className="slide" onClick={(event) => handleOnClick(event)}>
				<div>Logout</div>
        <i className="icon-arrow-right"></i>
			</button>
		</div>
	);
};

export default LogoutAccountButton;
