import React, { useState, useEffect } from 'react'

export default function Locations() {
	const [locationsData, setLocationsData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/locations')
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				const data = await response.json()
				setLocationsData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])
	console.log(locationsData)

	return (
		<div>
			<h1>locations</h1>
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>description</th>
						<th>price_per_hour</th>
					</tr>
				</thead>
				<tbody>
					{locationsData.map(locations => (
						<tr key={locations.id}>
							<td>{locations.name}</td>
							<td>{locations.description}</td>
							<td>{locations.price_per_hour}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
