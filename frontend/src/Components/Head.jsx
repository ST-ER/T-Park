import React from 'react'
import { Link } from 'react-router-dom'

export default function Head() {
	return (
		<>
			<header className='header'>Панель управления парка</header>
			<nav className='nav'>
				<span>
					<Link to='/staff'>Сотрудники</Link>
				</span>
				<span>
					<Link to='/positions'>Должности</Link>
				</span>
				<span>
					<Link to='/rental_of_property'>Аренда жилья</Link>
				</span>
				<span>
					<Link to='/activities'>Активности</Link>
				</span>
				<span>
					<Link to='/locations'>Локации</Link>
				</span>
				<span>
					<Link to='/customers'>Клиентская база</Link>
				</span>
				<span>
					<Link to='/orders'>Заказы</Link>
				</span>
				<span>
					<Link to='/housing'>Жильё</Link>
				</span>
			</nav>
		</>
	)
}
