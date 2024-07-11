import React, { useState, useEffect } from 'react'

export default function Activities() {
	const [activitiesData, setActivitiesData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/activities')
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				const data = await response.json()
				setActivitiesData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])
	console.log(activitiesData)

	return (
		<div>
			<h1>activities</h1>
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>description</th>
						<th>price</th>
					</tr>
				</thead>
				<tbody>
					{activitiesData.map(activities => (
						<tr key={activities.id}>
							<td>{activities.name}</td>
							<td>{activities.description}</td>
							<td>{activities.price}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
