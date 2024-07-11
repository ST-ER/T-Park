import React, { useState, useEffect } from 'react'

export default function Rental_of_property() {
	const [staffData, setStaffData] = useState([])

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

	return (
		<div>
			<h1>Staff</h1>
			<table>
				<thead>
					<tr>
						<th>surname</th>
						<th>name</th>
						<th>patronymic</th>
						<th>date_of_birth</th>
						<th>phone</th>
						<th>dismissed</th>
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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
