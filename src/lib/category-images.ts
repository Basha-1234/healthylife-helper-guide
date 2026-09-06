import type { CategoryId } from "./i18n";
import catHygiene from "@/assets/cat-hygiene.png";
import catMosquito from "@/assets/cat-mosquito.png";
import catNutrition from "@/assets/cat-nutrition.png";
import catMind from "@/assets/cat-mind.png";
import catDisease from "@/assets/cat-disease.png";
import catWomen from "@/assets/cat-women.png";

export const CATEGORY_IMAGES: Record<CategoryId, string> = {
  hygiene: catHygiene,
  mosquito: catMosquito,
  nutrition: catNutrition,
  mind: catMind,
  disease: catDisease,
  women: catWomen,
};
