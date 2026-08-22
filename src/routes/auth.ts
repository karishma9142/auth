import express from "express";
import { addUserRole, loginUser, myProfile } from "../controllers/auth.js";
import { IsAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post('/login' , loginUser);
router.put('/add/role' , IsAuth , addUserRole);
router.get('/me' , IsAuth , myProfile);

export default router;