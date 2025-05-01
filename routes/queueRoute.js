import { Router } from "express";
import queueController from "../controllers/QueueController.js";
import auth from "../midllewares/auth.js";

const router = Router();

router.route('/queues').get(auth, queueController.getAllQueues);
router.route('/queues').delete(auth, queueController.deleteAllQueues);


export default router;