import React, { useState } from 'react'

const AddStaff = () => {
	const [staffData, setStaffData] = useState({
		surname: '',
		name: '',
		patronymic: '',
		date_of_birth: '',
		phone: '',
		dismissed: false,
	})

	const handleSubmit = async e => {
		e.preventDefault()

		const response = await fetch('http://localhost:8080/api/staff', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(staffData),
		})

		const data = await response.json()
		console.log(data) // выводим результат в консоль

		// Дополнительные действия после успешного добавления записи
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Фамилия'
					value={staffData.surname}
					onChange={e =>
						setStaffData({ ...staffData, surname: e.target.value })
					}
				/>
				<input
					type='text'
					placeholder='Имя'
					value={staffData.name}
					onChange={e => setStaffData({ ...staffData, name: e.target.value })}
				/>
				<input
					type='text'
					placeholder='Отчество'
					value={staffData.patronymic}
					onChange={e =>
						setStaffData({ ...staffData, patronymic: e.target.value })
					}
				/>
				<input
					type='date'
					placeholder='Дата рождения'
					value={staffData.date_of_birth}
					onChange={e =>
						setStaffData({ ...staffData, date_of_birth: e.target.value })
					}
				/>
				<input
					type='tel'
					placeholder='Телефон'
					value={staffData.phone}
					onChange={e => setStaffData({ ...staffData, phone: e.target.value })}
				/>
				<button type='submit'>Добавить</button>
			</form>
		</div>
	)
}

export default AddStaff
