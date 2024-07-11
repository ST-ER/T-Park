import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Add from '../Components/Add'

export default function Staff() {
	const [staffData, setStaffData] = useState([])
	const [oneStaff, setOneStaff] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleDelete = async id => {
		console.log(id)
		try {
			const response = await fetch(`http://localhost:8080/api/staff/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (response.ok) {
				console.log('Запись успешно удалена')
				// Дополнительные действия после успешного удаления записи
			} else {
				console.error('Ошибка при удалении записи')
			}
		} catch (error) {
			console.error('Произошла ошибка:', error)
		}
	}
	// ------------------
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/staff')
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				let data = await response.json()
				data = data.map(item => {
					const dateWithoutTime = item.date_of_birth.split('T')[0]
					return { ...item, date_of_birth: dateWithoutTime }
				})
				setStaffData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])
	console.log(staffData)
	// ------------------

	const openModal = id => {
		setOneStaff(staffData.find(staff => staff.id === id))
		setIsModalOpen(true)
	}

	const closeModal = async () => {
		setIsModalOpen(false)
		console.log(oneStaff)

		try {
			const response = await fetch('http://localhost:8080/api/staff', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(oneStaff), // Предполагается, что oneStaff содержит данные для обновления
			})

			if (response.ok) {
				// Обработка успешного ответа
				console.log('Данные обновлены успешно')
			} else {
				// Обработка ошибки
				console.error('Не удалось обновить данные')
			}
		} catch (error) {
			console.error('Произошла ошибка при отправке запроса', error)
		}
	}

	const handleChange = e => {
		const { name, value } = e.target
		setOneStaff(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<div>
			<Add />
			<table>
				<thead>
					<tr>
						<th>surname</th>
						<th>name</th>
						<th>patronymic</th>
						<th>date_of_birth</th>
						<th>phone</th>
						<th>dismissed</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{staffData.map(staff => (
						<tr key={staff.id}>
							<td>{staff.surname}</td>
							<td>{staff.name}</td>
							<td>{staff.patronymic}</td>
							<td>{staff.date_of_birth}</td>
							<td>{staff.phone}</td>
							<td>{staff.dismissed}</td>
							<td>
								<button onClick={() => openModal(staff.id)}>Изменить</button>
								<button onClick={() => handleDelete(staff.id)}>Удалить</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Modal isOpen={isModalOpen} onRequestClose={closeModal}>
				<h2>Модальное окно</h2>
				<form action='' method='get'>
					<p>
						<label htmlFor='surname'>surname:</label>
						<input
							type='text'
							name='surname'
							value={oneStaff.surname}
							onChange={handleChange}
						/>
					</p>
					<p>
						<label htmlFor='name'>name:</label>
						<input
							type='text'
							name='name'
							value={oneStaff.name}
							onChange={handleChange}
						/>
					</p>
					<p>
						<label htmlFor='patronymic'>patronymic:</label>
						<input
							type='text'
							name='patronymic'
							value={oneStaff.patronymic}
							onChange={handleChange}
						/>
					</p>
					<p>
						<label htmlFor='date_of_birth'>date_of_birth:</label>
						<input
							type='text'
							name='date_of_birth'
							value={oneStaff.date_of_birth}
							onChange={handleChange}
						/>
					</p>
					<p>
						<label htmlFor='dismissed'>dismissed:</label>
						<input
							type='text'
							name='dismissed'
							value={oneStaff.dismissed}
							onChange={handleChange}
						/>
					</p>
				</form>
				<button onClick={closeModal}>Обновить</button>
			</Modal>
		</div>
	)
}
