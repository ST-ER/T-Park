import React, { useState, useEffect } from 'react'

export default function Customers() {
	const [customersData, setCustomersData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/customers')
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				const data = await response.json()
				setCustomersData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])
	console.log(customersData)

	return (
		<div>
			<h1>customers</h1>
			<table>
				<thead>
					<tr>
						<th>surname</th>
						<th>name</th>
						<th>patronymic</th>
						<th>phone</th>
						<th>date_of_birth</th>
						<th>email</th>
					</tr>
				</thead>
				<tbody>
					{customersData.map(customers => (
						<tr key={customers.id}>
							<td>{customers.surname}</td>
							<td>{customers.name}</td>
							<td>{customers.patronymic}</td>
							<td>{customers.phone}</td>
							<td>{customers.date_of_birth}</td>
							<td>{customers.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
