import { Router } from "express";
import clientRoutes from "./client.routes";
import team from "./team.routes";
import subscribe from "./subscribe.routes"

const router = Router();

router.use(clientRoutes);
router.use(team);
router.use(subscribe);

export default router;
