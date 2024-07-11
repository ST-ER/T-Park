import { Router } from "express";
const router = new Router()
import activitiesController from "../controller/activities.controller.js"

router.post('/activities', activitiesController.createActivities)
router.get('/activities', activitiesController.getActivities)
router.get('/activities/:id', activitiesController.getOneActivities)
router.put('/activities', activitiesController.updateActivities)
router.delete('/activities/:id', activitiesController.deleteActivities)
export default router