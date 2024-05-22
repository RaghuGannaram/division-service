import express from "express";
import divisionController from "../controllers/division.controller.js";

const router = express.Router();

router.post("/division", divisionController.division);

export default router;
