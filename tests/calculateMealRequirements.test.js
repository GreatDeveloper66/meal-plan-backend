import { describe, test } from "node:test";
import assert from "node:assert";


import { calculateMealRequirements } from '../services/MealCalculationLogic.js';

describe("calculateMealRequirements", () => {
  test("correctly splits daily requirements into meals based on meal splits", () => {
   const profile = {
      age: 30,
      weight: { value: 70, unit: "kg" },
      height: { value: 175, unit: "cm" },
      activityLevel: "moderate"
    };

    const meals = calculateMealRequirements(profile);

    assert.deepEqual(meals.breakfast, { calories: 728, protein: 36, fat: 24, carbs: 92 });
    assert.deepEqual(meals.lunch, { calories: 849, protein: 42, fat: 28, carbs: 107 });
    assert.deepEqual(meals.dinner, { calories: 850, protein: 43, fat: 29, carbs: 104 });
  });
});