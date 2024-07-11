import { Router } from "express";
const router = new Router()
import customersController from "../controller/customers.controller.js"

router.post('/customers', customersController.createCustomers)
router.get('/customers', customersController.getCustomers)
router.get('/customers/:id', customersController.getOneCustomers)
router.put('/customers', customersController.updateCustomers)
router.delete('/customers/:id', customersController.deleteCustomers)
export default router