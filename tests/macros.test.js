import { describe, test } from "node:test";
import assert from "node:assert";

import { calculateMacronutrients} from '../services/MealCalculationLogic.js';

describe("calculateMacronutrients", () => {
  test("returns correct macronutrient breakdown for a standard diet", () => {
    const profile = {
      dietType: "standard",
      age: 30,
      weight: { value: 75, unit: "kg" },
      height: { value: 175, unit: "cm" },
      weightGoal: "maintain",
      activityLevel: "moderate"
    };
    const macros = calculateMacronutrients(profile);
    assert.deepEqual(macros, { protein: 125, fat: 83, carbs: 314 });
    });
    test("returns correct macronutrient breakdown for a keto diet", () => {
    const profile = {
      dietType: "keto",
      age: 40,
      weight:{ value: 90, unit: "kg" },
      height: { value: 185, unit: "cm" },
      weightGoal: "maintain",
      activityLevel: "active"
    };
    const macros = calculateMacronutrients(profile);
    assert.deepEqual(macros, { protein: 192, fat: 239, carbs: 37 });
    });
    test("returns correct macronutrient breakdown for a high-protein diet", () => {
    const profile = {
      dietType: "high-protein",
      age: 25,
      weight: { value: 80, unit: "kg"   },
      height: { value: 180, unit: "cm" },
      weightGoal: "gain",
      activityLevel: "active"
    };
    const macros = calculateMacronutrients(profile);
    assert.deepEqual(macros, { protein: 347, fat: 116, carbs: 260 });
  });
});
