import { Router } from "express";
import userController from "../controllers/userController.js";
import auth from "../midllewares/auth.js";

const router = Router();

router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.loginUser);


export default router;