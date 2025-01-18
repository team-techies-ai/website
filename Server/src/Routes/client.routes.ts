import express from "express";
import { validateClient } from "../Validator/client.validator"; 
import { addClient } from "../Controllers/client.controller"; 

const router = express.Router();

router.post("/clients", addClient);

export default router;
