import React, { useState, useEffect } from 'react'

export default function Orders() {
	const [ordersData, setOrdersData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/orders')
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				const data = await response.json()
				setOrdersData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])
	console.log(ordersData)

	return (
		<div>
			<h1>orders</h1>
			<table>
				<thead>
					<tr>
						<th>date_of_creation</th>
						<th>date_and_time</th>
						<th>number_of_guests</th>
						<th>location_id</th>
						<th>client_id</th>
						<th>full_cost</th>
					</tr>
				</thead>
				<tbody>
					{ordersData.map(orders => (
						<tr key={orders.id}>
							<td>{orders.date_of_creation}</td>
							<td>{orders.date_and_time}</td>
							<td>{orders.number_of_guests}</td>
							<td>{orders.location_id}</td>
							<td>{orders.client_id}</td>
							<td>{orders.full_cost}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
