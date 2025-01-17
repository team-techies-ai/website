import { Router } from "express";
import clientRoutes from "./client.routes";

const router = Router();

router.use(clientRoutes);

export default router;
