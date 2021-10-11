import React, { useState } from "react";
import "../Styles/AntDesign.css";
import { Button, Modal, Popconfirm, message } from "antd";

const DeleteAccountButton = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleDelete = () => {
		setIsModalVisible(false);
		// refresh page after Delete is clicked
		window.location.reload(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<Button type="danger" onClick={showModal}>
				Delete Account
			</Button>

			<Modal
				title="Delete Account"
				width={800}
				visible={isModalVisible}
				onOk={handleDelete}
				onCancel={handleCancel}
				footer={[
					<Button onClick={handleCancel}>Cancle</Button>,
					<Popconfirm
						title="Confirm Delete?"
						onConfirm={handleDelete}
						onCancel={handleCancel}
						okText="Yes"
						okType="danger"
						cancelText="No"
					>
						<Button type="danger">Delete</Button>
					</Popconfirm>,
				]}
			>
				<p>Are you sure you want to delete your account?</p>
			</Modal>
		</div>
	);
};

export default DeleteAccountButton;
