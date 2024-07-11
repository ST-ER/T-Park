import { Router } from "express";
const router = new Router()
import locationsController from "../controller/locations.controller.js"

router.post('/locations', locationsController.createLocations)
router.get('/locations', locationsController.getLocations)
router.get('/locations/:id', locationsController.getOneLocations)
router.put('/locations', locationsController.updateLocations)
router.delete('/locations/:id', locationsController.deleteLocations)
export default router