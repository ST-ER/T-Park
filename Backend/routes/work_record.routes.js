import { Router } from "express";
const router = new Router()
import work_recordController from "../controller/work_record.controller.js"

router.post('/work_record', work_recordController.createWork_record)
router.get('/work_record', work_recordController.getWork_record)
router.get('/work_record/:id', work_recordController.getOneWork_record)
router.put('/work_record', work_recordController.updateWork_record)
router.delete('/work_record/:id', work_recordController.deleteWork_record)
export default router