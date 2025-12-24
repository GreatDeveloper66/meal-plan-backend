export const calculateDailyCalories = (profile) => {
  const { age, weight, height, sex, dietType, weightGoal } = profile;

  // Convert weight to kg if in lb
  const weightInKg = weight.unit === 'lb' ? weight.value * 0.453592 : weight.value;
    // Convert height to cm if in in
    const heightInCm = height.unit === 'in' ? height.value * 2.54 : height.value;
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (sex === 'male') {
        bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
    } else if (sex === 'female') {
        bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
    } else {
        // For 'other', take average of male and female
        const bmrMale = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
        const bmrFemale = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
        bmr = (bmrMale + bmrFemale) / 2;
    }
    // Adjust BMR based on diet type
    let activityFactor = 1.2;
    switch (dietType) {
        case 'keto':
            activityFactor = 1.1;
            break;
        case 'high-protein':
            activityFactor = 1.3;
            break;
        case 'vegetarian':
            activityFactor = 1.25;
            break;
        case 'vegan':
            activityFactor = 1.2;
            break;
        default:
            activityFactor = 1.2;
    }
    let dailyCalories = bmr * activityFactor;
    // Adjust calories based on weight goal
    switch (weightGoal) {
        case 'lose':
            dailyCalories -= 500;
            break;
        case 'gain':
            dailyCalories += 500;
            break;  
        case 'maintain':
        default:
            break;
    }
    return Math.round(dailyCalories);
};

export const calculateMacronutrients = (dailyCalories, profile) => {
  const { dietType } = profile;
  let proteinPercent = 0.2;
  let fatPercent = 0.3;
  let carbPercent = 0.5;
    switch (dietType) {
        case 'keto':
            proteinPercent = 0.25;
            fatPercent = 0.7;
            carbPercent = 0.05;
            break;
        case 'high-protein':
            proteinPercent = 0.4;
            fatPercent = 0.3;
            carbPercent = 0.3;
            break;
        case 'vegetarian':
            proteinPercent = 0.25;
            fatPercent = 0.3;
            carbPercent = 0.45;
            break;
        case 'vegan':
            proteinPercent = 0.2;
            fatPercent = 0.25;
            carbPercent = 0.55;
            break;
        default:
            proteinPercent = 0.2;
            fatPercent = 0.3;
            carbPercent = 0.5;
    }
    const proteinGrams = Math.round((dailyCalories * proteinPercent) / 4);
    const fatGrams = Math.round((dailyCalories * fatPercent) / 9);
    const carbGrams = Math.round((dailyCalories * carbPercent) / 4);
    return {
        protein: proteinGrams,
        fat: fatGrams,
        carbs: carbGrams
    };
};

export const generateMealPlan = (profile) => {
  const dailyCalories = calculateDailyCalories(profile);
  const macronutrients = calculateMacronutrients(dailyCalories, profile);
    return {
        dailyCalories,
        macronutrients
    };
};

export const calcuateBreafastMeal = (dailyCalories, macronutrients) => {
  const breakfastCalories = Math.round(dailyCalories * 0.25);
  const breakfastProtein = Math.round(macronutrients.protein * 0.25);
    const breakfastFat = Math.round(macronutrients.fat * 0.25);
    const breakfastCarbs = Math.round(macronutrients.carbs * 0.25);
    return {
        calories: breakfastCalories,        
        protein: breakfastProtein,
        fat: breakfastFat,
        carbs: breakfastCarbs
    };
};
