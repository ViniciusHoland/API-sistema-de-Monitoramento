import { Router } from "express";
import userRouter from "./userRoute.js";
import queueRouter from "./queueRoute.js";

const router = Router();

router.use('/', userRouter);
router.use('/', queueRouter);


export default router;