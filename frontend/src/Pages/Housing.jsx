import React, { useState, useEffect } from 'react'

export default function Housing() {
	const [housingData, setHousingData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/housing')
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				const data = await response.json()
				setHousingData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])
	console.log(housingData)

	return (
		<div>
			<h1>housing</h1>
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>description</th>
						<th>price_per_day</th>
					</tr>
				</thead>
				<tbody>
					{housingData.map(housing => (
						<tr key={housing.id}>
							<td>{housing.name}</td>
							<td>{housing.description}</td>
							<td>{housing.price_per_day}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
