import { Router } from "express";
import clientRoutes from "./client.routes";
import team from "./team.routes";
import subscribe from "./subscribe.routes"
import auth from "./auth.routes"

const router = Router();

router.use("/clients", clientRoutes);
router.use("/team", team);
router.use("/subscribe", subscribe);
router.use("/auth", auth);

export default router;
