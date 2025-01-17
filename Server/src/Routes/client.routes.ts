import { Router } from "express";
import { addClient } from "../Controllers/client.controller";

const router = Router();

router.post("/clients", addClient);

export default router;
