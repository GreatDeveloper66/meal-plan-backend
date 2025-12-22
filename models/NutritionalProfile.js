import mongoose from "mongoose";

const NutritionProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true
    },

    age: {
      type: Number,
      required: true,
      min: 10,
      max: 120
    },

    sex: {
      type: String,
      enum: ["male", "female", "other"],
      required: true
    },

    weight: {
      value: {
        type: Number,
        required: true
      },
      unit: {
        type: String,
        enum: ["kg", "lb"],
        default: "lb"
      }
    },

    height: {
      value: {
        type: Number,
        required: true
      },
      unit: {
        type: String,
        enum: ["cm", "in"],
        default: "in"
      }
    },

    dietType: {
      type: String,
      enum: ["normal", "keto", "high-protein", "vegetarian", "vegan"],
      default: "normal"
    },

    budgetLevel: {
      type: String,
      enum: ["minimal", "normal", "premium"],
      default: "normal"
    },

    weightGoal: {
      type: String,
      enum: ["lose", "maintain", "gain"],
      required: true
    },

    timelineWeeks: {
      type: Number,
      required: true,
      min: 1,
      max: 104
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("NutritionProfile", NutritionProfileSchema);
