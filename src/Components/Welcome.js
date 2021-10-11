import React from "react";
import EditAccountButton from "./EditAccountButton";
import LogoutAccountButton from "./LogoutAccountButton";
import DeleteAccountButton from "./DeleteAccountButton";
import '../Styles/Welcome.css'
// import '../Styles/ButtonStyles.css'

const Welcome = () => {
	return (
		<div id="welcome">
			<h1>Welcome to Project Rover!</h1>
			<div>
			  <EditAccountButton type="button" class="simple"/>
  			<DeleteAccountButton />
  			<LogoutAccountButton />
			</div>
		</div>
	);
};

export default Welcome;
