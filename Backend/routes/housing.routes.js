import { Router } from "express";
const router = new Router()
import housingController from "../controller/housing.controller.js"

router.post('/housing', housingController.createHousing)
router.get('/housing', housingController.getHousing)
router.get('/housing/:id', housingController.getOneHousing)
router.put('/housing', housingController.updateHousing)
router.delete('/housing/:id', housingController.deleteHousing)
export default router