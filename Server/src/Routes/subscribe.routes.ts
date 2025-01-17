import express from "express"; 
import { Subscribe } from "../Controllers/subscribe.controller"; 

const router = express.Router();

router.post("/subscribe", Subscribe);

export default router;
