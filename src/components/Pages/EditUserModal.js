import React from "react";
import { Button, Modal, ModalFooter, ModalBody, ModalHeader, Form, FormGroup, Label, Input } from "reactstrap";

function EditUserModal(props) {
    return (
        <div>
            <Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Edit User</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleFirstName">
                                First Name
                            </Label>
                            <Input
                                id="exampleFirstName"
                                name="firstName"
                                placeholder="First Name"
                                type="name"
                            />
                            <Label for="exampleLasttName">
                                Last Name
                            </Label>
                            <Input
                                id="exampleLastName"
                                name="lastName"
                                placeholder="Last Name"
                                type="name"
                            />
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <Label for="exampleProfilePicture">
                                Profile Picture
                            </Label>
                            <Input
                                id="exampleProfilePicture"
                                name="profilePicture"
                                placeholder="Profile Picture Link"
                                type="name"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter toggle={props.toggle}>
                    <Button color="primary" onClick={props.toggle}>Save</Button>
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditUserModal;