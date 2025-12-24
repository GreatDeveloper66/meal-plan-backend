// schemas/nutritionProfile.schema.js
import { z } from "zod";

export const nutritionProfileSchema = z.object({
  age: z.number().min(10).max(120),
  sex: z.enum(["male", "female", "other"]),
  weight: z.object({
    value: z.number().positive(),
    unit: z.enum(["kg", "lb"]).default("lb")
  }),
  height: z.object({
    value: z.number().positive(),
    unit: z.enum(["cm", "in"]).default("in")
  }),
  activityFactor: z.enum([
    "sedentary",
    "lightly active",
    "moderately active",
    "very active",
    "extra active"
  ]).default("sedentary"),
  dietType: z.enum([
    "normal",
    "keto",
    "high-protein",
    "vegetarian",
    "vegan"
  ]).default("normal"),
  budgetLevel: z.enum([
    "minimal",
    "normal",
    "premium"
  ]).default("normal"),
  weightGoal: z.enum(["lose", "maintain", "gain"]),
  timelineWeeks: z.number().min(1).max(104)
});

