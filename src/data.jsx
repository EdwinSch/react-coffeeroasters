import { nanoid } from "nanoid";

// Coffee specialties imgs
import espressoImg from "./assets/home/desktop/image-gran-espresso.png";
import planaltoImg from "./assets/home/desktop/image-planalto.png";
import piccolloImg from "./assets/home/desktop/image-piccollo.png";
import dancheImg from "./assets/home/desktop/image-danche.png";
// USP icons
import { BiSolidCoffeeBean, BiSolidGift } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";

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

export const usps = [
  {
    icon: <BiSolidCoffeeBean />,
    title: "Best quality",
    text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    icon: <BiSolidGift />,
    title: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    icon: <MdLocalShipping />,
    title: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];
