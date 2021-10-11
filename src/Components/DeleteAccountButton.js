import React, { useState } from "react";
import "../Styles/AntDesign.css";
import { Button, Modal } from "antd";

const DeleteAccountButton = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


	return (
		<div>
			<Button type="danger" onClick={showModal}>
				Delete Account
			</Button>
      
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
		</div>
	);
};

export default DeleteAccountButton;
