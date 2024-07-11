import { Routes, Route } from 'react-router-dom'
import './App.css'
import Staff from './Pages/Staff'
import Positions from './Pages/Positions'
import Rental_of_property from './Pages/Rental_of_property'
import Activities from './Pages/Activities'
import Locations from './Pages/Locations'
import Customers from './Pages/Customers'
import Orders from './Pages/Orders'
import Housing from './Pages/Housing'
import Head from './Components/Head'

function App() {
	return (
		<>
			<Head />
			<div className='app'>
				<Routes>
					<Route path='staff' element={<Staff />} />
					<Route path='positions' element={<Positions />} />
					<Route path='rental_of_property' element={<Rental_of_property />} />
					<Route path='activities' element={<Activities />} />
					<Route path='locations' element={<Locations />} />
					<Route path='customers' element={<Customers />} />
					<Route path='orders' element={<Orders />} />
					<Route path='housing' element={<Housing />} />
				</Routes>
			</div>
		</>
	)
}

export default App
