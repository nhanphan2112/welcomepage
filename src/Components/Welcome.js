import React from "react";
import EditAccountButton from "./EditAccountButton";
import LogoutAccountButton from "./LogoutAccountButton";
import DeleteAccountButton from "./DeleteAccountButton";

const Welcome = () => {
	return (
		<div>
			Welcome to Project Rover!
			<EditAccountButton />
			<DeleteAccountButton />
			<LogoutAccountButton />
		</div>
	);
};

export default Welcome;
