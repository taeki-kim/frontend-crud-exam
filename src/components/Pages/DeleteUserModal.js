import React from "react";
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function DeleteUserModal(props) {
    return (
        <div>
            <Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Delete User</ModalHeader>
                <ModalBody>
                    <Label>
                        Are you sure you want to delete this user?
                    </Label>
                </ModalBody>
                <ModalFooter toggle={props.toggle}>
                    <Button color="primary" onClick={props.toggle}>Yes</Button>
                    <Button color="secondary" onClick={props.toggle}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default DeleteUserModal;