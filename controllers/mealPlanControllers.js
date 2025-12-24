import NutritionalProfile from "../models/NutritionalProfile.js";
import { nutritionProfileSchema } from "../schemas/NutritionalProfileSchema.js";

export const createNutritionalProfile = async (req, res) => {
    const parsed = nutritionProfileSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ errors: parsed.error.errors });
    } else {
        try {
            const profileData = parsed.data;
            const newProfile = new NutritionalProfile(profileData);
            await newProfile.save();
            res.status(201).json(newProfile);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export const getNutritionalProfile = async (req, res) => {
  try {
    const profileId = req.params.id;
    const parsed = nutritionProfileSchema.safeParse(req.body);
    const parsedId = nutritionProfileSchema.safeParse(profileId);
    if (!parsed.success || !parsedId.success) {
        return res.status(400).json({ errors: parsed.error.errors });
    }

    const profile = await NutritionalProfile.findById(profileId);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
};
export const updateNutritionalProfile = async (req, res) => {
  try {
    const profileId = req.params.id;
    const parsed = nutritionProfileSchema.safeParse(req.body);
    const parsedId = nutritionProfileSchema.safeParse(profileId);
    if (!parsed.success || !parsedId.success) {
        return res.status(400).json({ errors: parsed.error.errors });
    }
    const updatedProfile = await NutritionalProfile.findByIdAndUpdate(
      profileId,
      parsed.data,
      { new: true }
    );
    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(updatedProfile);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
};

export const partialupdateNutritionalProfile = async (req, res) => {
    try {
        const profileId = req.params.id;
        const partialSchema = nutritionProfileSchema.partial();
        const parsed = partialSchema.safeParse(req.body);
        const parsedId = nutritionProfileSchema.safeParse(profileId);
    if (!parsedId.success || !parsed.success) {
        return res.status(400).json({ errors: parsedId.error.errors });
    }
    const updatedProfile = await NutritionalProfile.findByIdAndUpdate(
      profileId,
      parsed.data,
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(updatedProfile);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
};

export const deleteNutritionalProfile = async (req, res) => {
    try {
    const profileId = req.params.id;
    const parsedId = nutritionProfileSchema.safeParse(profileId);
    if (!parsedId.success) {
        return res.status(400).json({ errors: parsedId.error.errors });
    }

    const deletedProfile = await NutritionalProfile.findByIdAndDelete(profileId);
    if (!deletedProfile) {
        return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json({ message: "Profile deleted successfully" });
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
};