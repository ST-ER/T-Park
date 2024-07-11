 import { Router } from "express";
const router = new Router()
import positionsController from "../controller/positions.controller.js"

router.post('/positions', positionsController.createPositions)
router.get('/positions', positionsController.getPositions)
router.get('/positions/:id', positionsController.getOnePositions)
router.put('/positions', positionsController.updatePositions)
router.delete('/positions/:id', positionsController.deletePositions)
export default router