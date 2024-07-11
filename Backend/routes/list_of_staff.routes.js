import { Router } from "express";
const router = new Router()
import list_of_staffController from "../controller/list_of_staff.controller.js"

router.post('/list_of_staff', list_of_staffController.createList_of_staff)
router.get('/list_of_staff', list_of_staffController.getList_of_staff)
router.get('/list_of_staff/:id', list_of_staffController.getOneList_of_staff)
router.put('/list_of_staff', list_of_staffController.updateList_of_staff)
router.delete('/list_of_staff/:id', list_of_staffController.deleteList_of_staff)
export default router