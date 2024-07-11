 import { Router } from "express";
const router = new Router()
import rental_housingController from "../controller/rental_housing.controller.js"

router.post('/rental_housing', rental_housingController.createRental_housing)
router.get('/rental_housing', rental_housingController.getRental_housing)
router.get('/rental_housing/:id', rental_housingController.getOneRental_housing)
router.put('/rental_housing', rental_housingController.updateRental_housing)
router.delete('/rental_housing/:id', rental_housingController.deleteRental_housing)
export default router