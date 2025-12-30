const foods = [
  {
    "id": "eggs",
    "name": "Eggs",
    "category": ["breakfast"],
    "macros": {
      "protein": 13,
      "carbs": 1,
      "fat": 11
    },
    "quantity": "2 large",
    "calories": 155
  },
  {
    "id": "chicken_breast",
    "name": "Chicken Breast",
    "category": ["lunch", "dinner"],
    "macros": {
      "protein": 31,
      "carbs": 0,
      "fat": 3
    },
    "quantity": "100g",
    "calories": 165
  },
  {
    "id": "oatmeal",
    "name": "Oatmeal",
    "category": ["breakfast"],
    "macros": {
      "protein": 5,
      "carbs": 27,
      "fat": 3
    },
    "quantity": "40g",
    "calories": 150
  },
    {
        "id": "broccoli",
        "name": "Broccoli",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 3,
        "carbs": 6,
        "fat": 0.3
        },
        "quantity": "100g",
        "calories": 55
    },
    {
        "id": "salmon",
        "name": "Salmon",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 25,
        "carbs": 0,
        "fat": 14
        },
        "quantity": "100g",
        "calories": 206
    },
    {
        "id": "quinoa",
        "name": "Quinoa",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 8,
        "carbs": 39,
        "fat": 3.5
        },
        "quantity": "100g",
        "calories": 222
    },
    {
        "id": "almonds",
        "name": "Almonds",
        "category": ["snack"],
        "macros": {
        "protein": 6,
        "carbs": 6,
        "fat": 14
        },
        "quantity": "28g",
        "calories": 164
    },
    {
        "id": "banana",
        "name": "Banana",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 1.3,
        "carbs": 27,
        "fat": 0.3
        },
        "quantity": "1 medium",
        "calories": 105
    },
    {
        "id": "greek_yogurt",
        "name": "Greek Yogurt",
        "category": ["breakfast", "snack"],
        "macros": {
        "protein": 10,
        "carbs": 4,
        "fat": 0
        },
        "quantity": "100g",
        "calories": 59
    },
    {
        "id": "spinach",
        "name": "Spinach",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 3,
        "carbs": 4,
        "fat": 0.4
        },
        "quantity": "100g",
        "calories": 23
    },
    {
        "id": "sweet_potato",
        "name": "Sweet Potato",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 2,
        "carbs": 20,
        "fat": 0
        },
        "quantity": "100g",
        "calories": 86
    },
    {
        "id": "peanut_butter",
        "name": "Peanut Butter",
        "category": ["snack"],
        "macros": {
        "protein": 8,
        "carbs": 6,
        "fat": 16
        },
        "quantity": "32g",
        "calories": 190
    },
    {
        "id": "apple",
        "name": "Apple",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 0.5,
        "carbs": 25,
        "fat": 0.3
        },
        "quantity": "1 medium",
        "calories": 95
    },
    {
        "id": "brown_rice",
        "name": "Brown Rice",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 3,
        "carbs": 23,
        "fat": 1
        },
        "quantity": "100g",
        "calories": 111
    },
    {
        "id": "carrots",
        "name": "Carrots",
        "category": ["lunch", "dinner", "snack"],
        "macros": {
        "protein": 1,
        "carbs": 10,
        "fat": 0.2
        },
        "quantity": "100g",
        "calories": 41
    },
    {
        "id": "cottage_cheese",
        "name": "Cottage Cheese",
        "category": ["breakfast", "snack"],
        "macros": {
        "protein": 11,
        "carbs": 3,
        "fat": 4
        },
        "quantity": "100g",
        "calories": 98
    },
    {
        "id": "turkey_breast",
        "name": "Turkey Breast",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 29,
        "carbs": 0,
        "fat": 1
        },
        "quantity": "100g",
        "calories": 135
    },
    {
        "id": "avocado",
        "name": "Avocado",
        "category": ["lunch", "dinner", "snack"],
        "macros": {
        "protein": 2,
        "carbs": 9,
        "fat": 15
        },
        "quantity": "100g",
        "calories": 160
    },
    {
        "id": "black_beans",
        "name": "Black Beans",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 8,
        "carbs": 23,
        "fat": 0.5
        },
        "quantity": "100g",
        "calories": 132
    },
    {
        "id": "protein_shake",
        "name": "Protein Shake",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 20,
        "carbs": 3,
        "fat": 1.5
        },
        "quantity": "1 scoop (30g)",
        "calories": 120
    },
    {
        "id": "mixed_nuts",
        "name": "Mixed Nuts",
        "category": ["snack"],
        "macros": {
        "protein": 5,
        "carbs": 6,
        "fat": 15
        },
        "quantity": "28g",
        "calories": 170
    },
    {
        "id": "whole_wheat_bread",
        "name": "Whole Wheat Bread",
        "category": ["breakfast", "lunch"],
        "macros": {
        "protein": 4,
        "carbs": 12,
        "fat": 1
        },
        "quantity": "1 slice",
        "calories": 70
    },
    {
        "id": "hummus",
        "name": "Hummus",
        "category": ["snack", "lunch"],
        "macros": {
        "protein": 2,
        "carbs": 4,
        "fat": 5
        },
        "quantity": "2 tbsp (30g)",
        "calories": 70
    },
    {
        "id": "celery",
        "name": "Celery",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 0.7,
        "carbs": 3,
        "fat": 0.2
        },
        "quantity": "100g",
        "calories": 16
    },
    {
        "id": "watermelon",
        "name": "Watermelon",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 0.6,
        "carbs": 8,
        "fat": 0.2
        },
        "quantity": "100g",
        "calories": 30
    },
    {
        "id": "tofu",
        "name": "Tofu",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 8,
        "carbs": 2,
        "fat": 4
        },
        "quantity": "100g",
        "calories": 76
    },
    {
        "id": "chia_seeds",
        "name": "Chia Seeds",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 4,
        "carbs": 12,
        "fat": 9
        },
        "quantity": "28g",
        "calories": 137
    },
    {
        "id": "edamame",
        "name": "Edamame",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 11,
        "carbs": 9,
        "fat": 5
        },
        "quantity": "100g",
        "calories": 121
    },
    {
        "id": "cucumber",
        "name": "Cucumber",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 0.7,
        "carbs": 3.6,
        "fat": 0.1
        },
        "quantity": "100g",
        "calories": 16
    },
    {
        "id": "lentils",
        "name": "Lentils",
        "category": ["lunch", "dinner"],
        "macros": {
        "protein": 9,
        "carbs": 20,
        "fat": 0.4
        },
        "quantity": "100g",
        "calories": 116
    },
    {
        "id": "dark_chocolate",
        "name": "Dark Chocolate",
        "category": ["snack"],
        "macros": {
        "protein": 2,
        "carbs": 13,
        "fat": 12
        },
        "quantity": "28g",
        "calories": 170
    },
    {
        "id": "green_tea",
        "name": "Green Tea",
        "category": ["beverage"],
        "macros": {
        "protein": 0,
        "carbs": 0,
        "fat": 0
        },
        "quantity": "1 cup (240ml)",
        "calories": 2
    },
    {
        "id": "coffee",
        "name": "Coffee",
        "category": ["beverage"],
        "macros": {
        "protein": 0,
        "carbs": 0,
        "fat": 0
        },
        "quantity": "1 cup (240ml)",
        "calories": 2
    },
    {
        "id": "water",
        "name": "Water",
        "category": ["beverage"],
        "macros": {
        "protein": 0,
        "carbs": 0,
        "fat": 0
        },
        "quantity": "1 cup (240ml)",
        "calories": 0
    },
    {
        "id": "orange",
        "name": "Orange",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 1.2,
        "carbs": 15,
        "fat": 0.2
        },
        "quantity": "1 medium",
        "calories": 62
    },
    {
        "id": "pumpkin_seeds",
        "name": "Pumpkin Seeds",
        "category": ["snack"],
        "macros": {
        "protein": 7,
        "carbs": 5,
        "fat": 13
        },
        "quantity": "28g",
        "calories": 151
    },
    {
        "id": "bell_pepper",
        "name": "Bell Pepper",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 1,
        "carbs": 6,
        "fat": 0.3
        },
        "quantity": "100g",
        "calories": 31
    },
    {
        "id": "zucchini",
        "name": "Zucchini",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 1.2,
        "carbs": 3.1,
        "fat": 0.3
        },
        "quantity": "100g",
        "calories": 17
    },
    {
        "id": "mushrooms",
        "name": "Mushrooms",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 3,
        "carbs": 3.3,
        "fat": 0.3
        },
        "quantity": "100g",
        "calories": 22
    },
    {
        "id": "asparagus",
        "name": "Asparagus",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 2.2,
        "carbs": 3.9,
        "fat": 0.2
        },
        "quantity": "100g",
        "calories": 20
    },
    {
        "id": "brussels_sprouts",
        "name": "Brussels Sprouts",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 3.4,
        "carbs": 9,
        "fat": 0.3
        },
        "quantity": "100g",
        "calories": 43
    },
    {
        "id": "cauliflower",
        "name": "Cauliflower",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 2,
        "carbs": 5,
        "fat": 0.3
        },
        "quantity": "100g",
        "calories": 25
    },
    {
        "id": "kale",
        "name": "Kale",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 4.3,
        "carbs": 8.8,
        "fat": 0.9
        },
        "quantity": "100g",
        "calories": 49
    },
    {
        "id": "chia_pudding",
        "name": "Chia Pudding",
        "category": ["breakfast", "snack"],
        "macros": {
        "protein": 6,
        "carbs": 20,
        "fat": 9
        },
        "quantity": "150g",
        "calories": 200
    },
    {
        "id": "smoothie_bowl",
        "name": "Smoothie Bowl",
        "category": ["breakfast", "snack"],
        "macros": {
        "protein": 8,
        "carbs": 35,
        "fat": 5
        },
        "quantity": "250g",
        "calories": 250
    },
    {
        "id": "granola_bar",
        "name": "Granola Bar",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 4,
        "carbs": 20,
        "fat": 7
        },
        "quantity": "1 bar (40g)",
        "calories": 190
    },
    {
        "id": "rice_cakes",
        "name": "Rice Cakes",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 1,
        "carbs": 7,
        "fat": 0.2
        },
        "quantity": "1 cake (9g)",
        "calories": 35
    },
    {
        "id": "turkey_jerky",
        "name": "Turkey Jerky",
        "category": ["snack"],
        "macros": {
        "protein": 9,
        "carbs": 3,
        "fat": 1
        },
        "quantity": "28g",
        "calories": 70
    },
    {
        "id": "popcorn",
        "name": "Popcorn",
        "category": ["snack"],
        "macros": {
        "protein": 3,
        "carbs": 18,
        "fat": 1
        },
        "quantity": "28g",
        "calories": 110
    },
    {
        "id": "edamame_snack",
        "name": "Edamame Snack",
        "category": ["snack"],
        "macros": {
        "protein": 11,
        "carbs": 9,
        "fat": 5
        },
        "quantity": "100g",
        "calories": 121
    },
    {
        "id": "protein_balls",
        "name": "Protein Balls",
        "category": ["snack"],
        "macros": {
        "protein": 6,
        "carbs": 15,
        "fat": 8
        },
        "quantity": "2 balls (40g)",
        "calories": 200
    },
    {
        "id": "fruit_salad",
        "name": "Fruit Salad",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 2,
        "carbs": 25,
        "fat": 0.5
        },
        "quantity": "200g",
        "calories": 120
    },
    {
        "id": "veggie_sticks",
        "name": "Veggie Sticks",
        "category": ["snack", "lunch", "dinner"],
        "macros": {
        "protein": 2,
        "carbs": 8,
        "fat": 0.5
        },
        "quantity": "100g",
        "calories": 40
    },
    {
        "id": "honey",
        "name": "Honey",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 0.3,
        "carbs": 17,
        "fat": 0
        },
        "quantity": "1 tbsp (21g)",
        "calories": 64
    },
    {
        "id": "maple_syrup",
        "name": "Maple Syrup",
        "category": ["snack", "breakfast"],
        "macros": {
        "protein": 0,
        "carbs": 13,
        "fat": 0
        },
        "quantity": "1 tbsp (20g)",
        "calories": 52
    },
    {
        "id": "almond_milk",
        "name": "Almond Milk",
        "category": ["beverage", "breakfast"],
        "macros": {
        "protein": 1,
        "carbs": 2,
        "fat": 2.5
        },
        "quantity": "1 cup (240ml)",
        "calories": 30
    },
    {
        "id": "pancakes",
        "name": "Pancakes",
        "category": ["breakfast"],
        "macros": {
        "protein": 6,
        "carbs": 28,
        "fat": 4
        },
        "quantity": "2 medium",
        "calories": 150
    },
    {
        "id": "waffles",
        "name": "Waffles",
        "category": ["breakfast"],
        "macros": {
        "protein": 5,
        "carbs": 25,
        "fat": 7
        },
        "quantity": "2 medium",
        "calories": 200
    },
    {
        "id": "turkey_sandwich",
        "name": "Turkey Sandwich",
        "category": ["lunch"],
        "macros": {
        "protein": 25,
        "carbs": 30,
        "fat": 5
        },
        "quantity": "1 sandwich",
        "calories": 350
    }
]

export default foods;