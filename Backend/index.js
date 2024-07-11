import express from 'express'
import activitiesRouter from './routes/activities.routes.js'
import customersRouter from './routes/customers.routes.js'
import housingRouter from './routes/housing.routes.js'
import list_of_activitiesRouter from './routes/list_of_activities.routes.js'
import list_of_staffRouter from './routes/list_of_staff.routes.js'
import locationsRouter from './routes/locations.routes.js'
import ordersRouter from './routes/orders.routes.js'
import positionsRouter from './routes/positions.routes.js'
import rental_housingRouter from './routes/rental_housing.routes.js'
import rental_housing_has_housingRouter from './routes/rental_housing_has_housing.routes.js'
import staffRouter from './routes/staff.routes.js'
import work_recordRouter from './routes/work_record.routes.js'

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	res.setHeader('Access-Control-Allow-Credentials', 'true')
	next()
})

app.use('/api', activitiesRouter)
app.use('/api', customersRouter)
app.use('/api', housingRouter)
app.use('/api', list_of_activitiesRouter)
app.use('/api', list_of_staffRouter)
app.use('/api', locationsRouter)
app.use('/api', ordersRouter)
app.use('/api', positionsRouter)
app.use('/api', rental_housingRouter)
app.use('/api', rental_housing_has_housingRouter)
app.use('/api', staffRouter)
app.use('/api', work_recordRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
