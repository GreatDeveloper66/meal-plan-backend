import express from "express";
import { requireAuth } from ".../middleware/requireAuth.js";
import { createNutritionalProfile, getNutritionalProfile, updateNutritionalProfile, deleteNutritionalProfile, partialupdateNutritionalProfile } from "../controllers/mealPlanControllers.js";

const router = express.Router();
router.use(requireAuth);

router.post("/", createNutritionalProfile);
router.get("/:id", getNutritionalProfile);
router.put("/:id", updateNutritionalProfile);
router.delete("/:id", deleteNutritionalProfile);
router.patch("/:id", partialupdateNutritionalProfile);