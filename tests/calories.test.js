import { describe, test } from "node:test";
import assert from "node:assert";


import { calculateDailyCalories } from "../services/MealCalculationLogic.js";

describe("calculateDailyCalories", () => {
  test("returns reasonable daily calories for maintenance goal", () => {
    const profile = {
      age: 30,
      sex: "male",
      weight: { value: 70, unit: "kg" },
      height: { value: 175, unit: "cm" },
      weightGoal: "maintain",
      activityLevel: "moderate",
    };

    const dailyCalories = calculateDailyCalories(profile);

    assert.ok(dailyCalories > 2400);
    assert.ok(dailyCalories < 2900);
  });

  test("returns reasonable daily calories for weight loss goal", () => {
    const profile = {
      age: 25,
      sex: "female",
      weight: { value: 60, unit: "kg" },
      height: { value: 165, unit: "cm" },
      weightGoal: "lose",
      activityLevel: "light",
    };

    const dailyCalories = calculateDailyCalories(profile);

    assert.ok(dailyCalories > 1300);
    assert.ok(dailyCalories < 2000);
  });

  test("returns reasonable daily calories for weight gain goal", () => {
    const profile = {
      age: 40,
      sex: "other",
      weight: { value: 80, unit: "kg" },
      height: { value: 180, unit: "cm" },
      weightGoal: "gain",
      activityLevel: "active",
    };

    const dailyCalories = calculateDailyCalories(profile);

    assert.ok(dailyCalories > 3000);
    assert.ok(dailyCalories < 3800);
  });
});
