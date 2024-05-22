import express from "express";
import divisionRouter from "../../routes/division.route.js";

const router = express.Router();

router.use("/", divisionRouter);

export default router;
