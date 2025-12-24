import { model } from 'mongoose';
import { NutritionalProfileSchema } from '../schemas/NutritionalProfileSchema.js';

const NutritionalProfile = model('NutritionalProfile', NutritionalProfileSchema);

export default NutritionalProfile;