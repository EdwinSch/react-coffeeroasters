import { nanoid } from "nanoid";

// Coffee specialties imgs
import espressoImg from "./assets/home/desktop/image-gran-espresso.png";
import planaltoImg from "./assets/home/desktop/image-planalto.png";
import piccolloImg from "./assets/home/desktop/image-piccollo.png";
import dancheImg from "./assets/home/desktop/image-danche.png";
// USP icons
import { BiSolidCoffeeBean, BiSolidGift } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";
// Country imgs
import ukImg from "./assets/about/desktop/illustration-uk.svg";
import CanadaImg from "./assets/about/desktop/illustration-canada.svg";
import AustraliaImg from "./assets/about/desktop/illustration-australia.svg";

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

export const countries = [
  {
    icon: ukImg,
    country: "United Kingdom",
    street: "68 Asfordby Rd",
    city: "Alcaston",
    phone: "+44 1241 918425",
  },
  {
    icon: CanadaImg,
    country: "Canada",
    street: "1528 Eglinton Avenue",
    city: "Toronto",
    phone: "+1 416 485 29975",
  },
  {
    icon: AustraliaImg,
    country: "Australia",
    street: "36 Swanston Street",
    city: "Victoria",
    phone: "+61 4 9928 3629",
  },
];

export const formData = [
  {
    id: 1,
    setName: "Preferences",
    heading: "How do you drink your coffee?",
    options: ["capsule", "filter", "espresso"],
  },
  {
    id: 2,
    setName: "Bean Type",
    heading: "What type of coffee?",
    options: ["single origin", "decaf", "blended"],
  },
];
