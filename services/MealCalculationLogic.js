import foods from "../data/foods.js";
import { mealSplits } from "../data/mealSplits.js";

/**
 * Calculates the daily calorie intake for a user based on their profile.
 *
 * Uses the Mifflin-St Jeor equation to calculate Basal Metabolic Rate (BMR),
 * then adjusts it based on diet type and weight goals.
 *
 * @param {Object} profile - The user's profile information
 * @param {number} profile.age - User's age in years
 * @param {Object} profile.weight - User's weight
 * @param {number} profile.weight.value - Weight value
 * @param {string} profile.weight.unit - Weight unit ('lb' or 'kg')
 * @param {Object} profile.height - User's height
 * @param {number} profile.height.value - Height value
 * @param {string} profile.height.unit - Height unit ('in' or 'cm')
 * @param {string} profile.sex - User's sex ('male', 'female', or 'other')
 * @param {string} profile.weightGoal - Weight goal ('lose', 'gain', or 'maintain')
 * @param {string} profile.activityLevel
// ('sedentary', 'light', 'moderate', 'active')

 *
 * @returns {number} The calculated daily calorie intake, rounded to the nearest whole number
 */
export const calculateDailyCalories = (profile) => {
  const { age, weight, height, sex, weightGoal, activityLevel } = profile;

  const weightInKg =
    weight.unit === "lb" ? weight.value * 0.453592 : weight.value;

  const heightInCm =
    height.unit === "in" ? height.value * 2.54 : height.value;

  let bmr;
  if (sex === "male") {
    bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
  } else if (sex === "female") {
    bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
  } else {
    const bmrMale = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
    const bmrFemale = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
    bmr = (bmrMale + bmrFemale) / 2;
  }

  let activityFactor = 1.2;
  switch (activityLevel) {
    case "light":
      activityFactor = 1.375;
      break;
    case "moderate":
      activityFactor = 1.55;
      break;
    case "active":
      activityFactor = 1.725;
      break;
    default:
      activityFactor = 1.2;
  }

  let dailyCalories = bmr * activityFactor;

  switch (weightGoal) {
    case "lose":
      dailyCalories -= 500;
      break;
    case "gain":
      dailyCalories += 500;
      break;
    default:
      break;
  }

  return Math.round(dailyCalories);

};

export const calculateMacronutrients = (profile) => {
  //Calculate macronutrients based on profile
  const { dietType } = profile;
  const dailyCalories = calculateDailyCalories(profile);


  let proteinPercent = 0.2;
  let fatPercent = 0.3;
  let carbPercent = 0.5;

  switch (dietType) {
    case "keto":
      proteinPercent = 0.25;
      fatPercent = 0.7;
      carbPercent = 0.05;
      break;
    case "high-protein":
      proteinPercent = 0.4;
      fatPercent = 0.3;
      carbPercent = 0.3;
      break;
    default:
      break;
  }

  const proteinCalories = dailyCalories * proteinPercent;
  const fatCalories = dailyCalories * fatPercent;

  const protein = Math.round(proteinCalories / 4);
  const fat = Math.round(fatCalories / 9);

  const remainingCalories =
    dailyCalories - (protein * 4 + fat * 9);

  const carbs = Math.round(remainingCalories / 4);

  return { protein, fat, carbs };
};


export const dailyRequirements = (profile) => {
  const dailyCalories = calculateDailyCalories(profile);
  const macronutrients = calculateMacronutrients(dailyCalories, profile);
  return {
    dailyCalories,
    macronutrients,
  };
};

export const calculateMealRequirements = (profile) => {
  const meals = {};
  const dailyRequirements = {
    dailyCalories: calculateDailyCalories(profile),
    macronutrients: calculateMacronutrients(profile),
  };
  let usedCalories = 0;
  let usedProtein = 0;
  let usedFat = 0;

  const mealNames = Object.keys(mealSplits);
  const dailyCalories = dailyRequirements.dailyCalories;
  const dailyProtein = dailyRequirements.macronutrients.protein;
  const dailyFat = dailyRequirements.macronutrients.fat;

  mealNames.forEach((meal, index) => {
    const ratio = mealSplits[meal];

    // For last meal, assign leftovers to avoid rounding drift
    if (index === mealNames.length - 1) {
      meals[meal] = {
        calories: dailyCalories - usedCalories,
        protein: dailyProtein - usedProtein,
        fat: dailyFat - usedFat,
        carbs: Math.round(
          (dailyCalories -
            usedCalories -
            (dailyProtein - usedProtein) * 4 -
            (dailyFat - usedFat) * 9) /
            4
        ),
      };
      return;
    }

    const calories = Math.round(dailyCalories * ratio);
    const protein = Math.round(dailyProtein * ratio);
    const fat = Math.round(dailyFat * ratio);

    const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);

    meals[meal] = { calories, protein, fat, carbs };

    usedCalories += calories;
    usedProtein += protein;
    usedFat += fat;
  });
  return meals;
};


const getAvailableListofFoodsForEachMeal = (profile) => {
  const mealTargets = calculateMealRequirements(profile);
  const availableFoods = {};
  for (const mealType in mealTargets) {
    availableFoods[mealType] = foods.all
      .filter(
        (food) =>
          food.calories <= mealTargets[mealType].calories &&
          food.macros.protein <= mealTargets[mealType].protein &&
          food.macros.fat <= mealTargets[mealType].fat &&
          food.macros.carbs <= mealTargets[mealType].carbs
      )
      .filter((food) => food.category.includes(mealType));

  }
  return availableFoods;
};







// export const getAvailableBreakfastFoodList = () => {
//   const mealTargets = calculateBreakfastRequirements(profile);

//   return foods.breakfast
//     .filter(
//       (food) =>
//         food.calories <= mealTargets.calories &&
//         food.protein <= mealTargets.protein &&
//         food.fat <= mealTargets.fat &&
//         food.carbs <= mealTargets.carbs
//     )
//     .filter((food) => food.category.includes("breakfast"));
// };

// export const getAvailableFoodListByMeal = (profile, mealType) => {
//   const mealTargets = calculateMealRequirements(profile, mealType);
//   return foods.all
//     .filter(
//       (food) =>
//         food.calories <= mealTargets.calories &&
//         food.macros.protein <= mealTargets.protein &&
//         food.macros.fat <= mealTargets.fat &&
//         food.macros.carbs <= mealTargets.carbs
//     )
//     .filter((food) => food.category.includes(mealType));
// };

// export const scoreFood = (food, remaining) => {
//   return (
//     Math.min(food.macros.protein, remaining.protein) * 4 +
//     Math.min(food.macros.carbs, remaining.carbs) * 2 +
//     Math.min(food.macros.fat, remaining.fat) * 1
//   );
// }

// export const bestFood = (mealFoods, remaining) => {
//   const bestFood = mealFoods
//     .map((f) => ({ food: f, score: scoreFood(f, remaining) }))
//     .sort((a, b) => b.score - a.score)[0]?.food;
//   return bestFood;
// };

// export const createBreakastMealPlan = (profile) => {
//     //step 1: filter foods based on profile
//     const mealFoods = getAvailableBreakfastFoodList(profile);
//     //step 2: track remaining requirements
//     const mealTargets = calculateBreakfastRequirements(profile);
//     let remaining = { ...mealTargets };
//     //step 3: score foods and pick best food
//     const bestFoodItem = bestFood(mealFoods, remaining);

//     if(bestFoodItem) {
//         //step 5: determine amount of food to meet requirements
//         const maxMultiplier = Math.min(
//   remaining.calories / bestFood.calories,
//   remaining.protein / bestFood.macros.protein || Infinity,
//   remaining.carbs / bestFood.macros.carbs || Infinity,
//   remaining.fat / bestFood.macros.fat || Infinity,
//   1.5 // safety cap to avoid ridiculous portions
// );

// const multiplier = Math.max(0.5, Math.round(maxMultiplier * 2) / 2);

//     }
// }
