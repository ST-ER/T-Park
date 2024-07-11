import { Router } from "express";
const router = new Router()
import list_of_activitiesController from "../controller/list_of_activities.controller.js"

router.post('/list_of_activities', list_of_activitiesController.createList_of_activities)
router.get('/list_of_activities', list_of_activitiesController.getList_of_activities)
router.get('/list_of_activities/:id', list_of_activitiesController.getOneList_of_activities)
router.put('/list_of_activities', list_of_activitiesController.updateList_of_activities)
router.delete('/list_of_activities/:id', list_of_activitiesController.deleteList_of_activities)
export default router