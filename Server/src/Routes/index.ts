import { Router } from "express";
import clientRoutes from "./client.routes";
import team from "./team.routes";
import subscribe from "./subscribe.routes"
import auth from "./auth.routes"

const router = Router();

router.use(clientRoutes);
router.use(team);
router.use(subscribe);
router.use(auth);

export default router;
