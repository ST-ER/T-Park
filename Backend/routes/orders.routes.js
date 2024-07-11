
import { Router } from "express";
const router = new Router()
import ordersController from "../controller/orders.controller.js"

router.post('/orders', ordersController.createOrders)
router.get('/orders', ordersController.getOrders)
router.get('/orders/:id', ordersController.getOneOrder)
router.put('/orders', ordersController.updateOrder)
router.delete('/orders/:id', ordersController.deleteOrder)
export default router