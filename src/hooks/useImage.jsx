import defaultImage from "../assets/defaultImage.jpg";
import { images } from "../config/images";
export const useImage = (name) =>
  images[name ? name.replace(".jpg", "") : ""] || defaultImage;
