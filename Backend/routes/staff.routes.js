import { Router } from "express";
const router = new Router()
import staffController from "../controller/staff.controller.js"

router.post('/staff', staffController.createStaff)
router.get('/staff', staffController.getStaff)
router.get('/staff/:id', staffController.getOneStaff)
router.put('/staff', staffController.updateStaff)
router.delete('/staff/:id', staffController.deleteStaff)
export default router