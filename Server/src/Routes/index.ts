import { Router } from "express";
import clientRoutes from "./client.routes";
import team from "./team.routes";

const router = Router();

router.use(clientRoutes);
router.use(team);

export default router;
