import { nanoid } from "nanoid";

import espressoImg from "./assets/home/desktop/image-gran-espresso.png";
import planaltoImg from "./assets/home/desktop/image-planalto.png";
import piccolloImg from "./assets/home/desktop/image-piccollo.png";
import dancheImg from "./assets/home/desktop/image-danche.png";

export const collection = [
  {
    id: nanoid(),
    type: "Gran Espresso",
    img: espressoImg,
    desciption:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    id: nanoid(),
    type: "Planalto",
    img: planaltoImg,
    desciption:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    id: nanoid(),
    type: "Piccollo",
    img: piccolloImg,
    desciption:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    id: nanoid(),
    type: "Danche",
    img: dancheImg,
    desciption:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];
