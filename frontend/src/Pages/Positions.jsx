import React, { useState, useEffect } from 'react'

export default function Positions() {
	const [positionsData, setPositionsData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/positions')
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				const data = await response.json()
				setPositionsData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])
	console.log(positionsData)

	return (
		<div>
			<h1>positions</h1>
			<table>
				<thead>
					<tr>
						<th>post</th>
						<th>rate</th>
					</tr>
				</thead>
				<tbody>
					{positionsData.map(positions => (
						<tr key={positions.id}>
							<td>{positions.post}</td>
							<td>{positions.rate}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
