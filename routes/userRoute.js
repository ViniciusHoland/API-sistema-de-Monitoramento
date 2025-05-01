import { Router } from "express";
import userController from "../controllers/userController.js";
import queueController from "../controllers/QueueController.js";
import auth from "../midllewares/auth.js";

const router = Router();

router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.loginUser);
router.route('/users').get(auth, userController.getAllUser);
router.route('/queues').get(auth, queueController.getAllQueues);


export default router;