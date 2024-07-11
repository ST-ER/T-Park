import React, { useState, useEffect } from 'react'

export default function Staff() {
	const [staffData, setStaffData] = useState([])
	const [editingId, setEditingId] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/staff')
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				const data = await response.json()
				setStaffData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])
	console.log(staffData)

	function handleEditClick(id) {
		setEditingId(id)
	}

	function handleUnlockInput(id) {
		// Найти объект в массиве staffData по id
		const staffIndex = staffData.findIndex(item => item.id === id)

		if (staffIndex !== -1) {
			// Создать копию объекта для изменения
			const updatedStaffData = [...staffData]

			// Изменить флаг редактирования для объекта с указанным id
			updatedStaffData[staffIndex] = {
				...updatedStaffData[staffIndex],
				editing: false,
			}

			// Обновить состояние staffData
			setStaffData(updatedStaffData)
		}

		// Сбросить editingId
		setEditingId(null)
	}

	function handleClick(id) {
		alert(`Вы нажали на меня! ${id}`)
	}

	return (
		<div>
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
							<td>
								<input
									value={staff.surname}
									readOnly={editingId !== staff.id}
								></input>
							</td>
							<td>
								<input
									value={staff.name}
									readOnly={editingId !== staff.id}
								></input>
							</td>
							<td>
								<input
									value={staff.patronymic}
									readOnly={editingId !== staff.id}
								></input>
							</td>
							<td>
								<input
									value={staff.date_of_birth}
									readOnly={editingId !== staff.id}
								></input>
							</td>
							<td>
								<input
									value={staff.phone}
									readOnly={editingId !== staff.id}
								></input>
							</td>
							<td>
								<input
									value={staff.dismissed}
									readOnly={editingId !== staff.id}
								></input>
							</td>
							<td>
								{editingId !== staff.id ? (
									<button onClick={() => handleEditClick(staff.id)}>
										Изменить
									</button>
								) : (
									<button onClick={() => handleUnlockInput(staff.id)}>
										Обновить
									</button>
								)}
								<button onClick={() => handleClick(staff.id)}>Удалить</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
