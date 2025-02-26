import React, { useState } from 'react';
import {Container, Table, Button} from 'reactstrap';
import {AddUserModal, DeleteUserModal, EditUserModal} from 'components/Pages';

function Index() {
	const [showAddUserModal, setShowAddUserModal] = useState(false);
	const [showEditUserModal, setShowEditUserModal] = useState(false);
	const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);

	return (
		<Container>
			<AddUserModal isOpen={showAddUserModal} toggle={() => setShowAddUserModal(!showAddUserModal)} />
			<DeleteUserModal isOpen={showDeleteUserModal} toggle={() => setShowDeleteUserModal(!showDeleteUserModal)} />
			<EditUserModal isOpen={showEditUserModal} toggle={() => setShowEditUserModal(!showEditUserModal)} />

			<div className='mt-3 text-right'>
				<Button color='primary' onClick={() => setShowAddUserModal(true)}>+ Add User</Button>
			</div>

			<Table className='mt-3'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Profile</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td />
						<td />
						<td>Mark</td>
						<td>Otto</td>
						<td><Button color='primary' onClick={() => setShowEditUserModal(true)}>Edit</Button></td>
						<td><Button color='danger' onClick={() => setShowDeleteUserModal(true)}>Delete</Button></td>
					</tr>
					<tr>
						<th scope='row'>2</th>
						<td />
						<td />
						<td>Jacob</td>
						<td>Thornton</td>
						<td><Button color='primary' onClick={() => setShowEditUserModal(true)}>Edit</Button></td>
						<td><Button color='danger' onClick={() => setShowDeleteUserModal(true)}>Delete</Button></td>
					</tr>
					<tr>
						<th scope='row'>3</th>
						<td />
						<td />
						<td>Larry</td>
						<td>the Bird</td>
						<td><Button color='primary' onClick={() => setShowEditUserModal(true)}>Edit</Button></td>
						<td><Button color='danger' onClick={() => setShowDeleteUserModal(true)}>Delete</Button></td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
}

export default Index;
