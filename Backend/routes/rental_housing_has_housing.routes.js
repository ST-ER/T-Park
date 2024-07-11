import { Router } from "express";
const router = new Router()
import rental_housing_has_housingController from "../controller/rental_housing_has_housing.controller.js"

router.post('/rental_housing_has_housing', rental_housing_has_housingController.createRental_housing_has_housing)
router.get('/rental_housing_has_housing', rental_housing_has_housingController.getRental_housing_has_housing)
router.get('/rental_housing_has_housing/:id', rental_housing_has_housingController.getOneRental_housing_has_housing)
router.put('/rental_housing_has_housing', rental_housing_has_housingController.updateRental_housing_has_housing)
router.delete('/rental_housing_has_housing/:id', rental_housing_has_housingController.deleteRental_housing_has_housing)
export default router