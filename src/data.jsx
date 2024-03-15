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
    options: [
      {
        type: "capsule",
        text: "Compatible with Nespresso systems and similar brewers.",
      },
      {
        type: "filter",
        text: "For pour over or drip methods like Aeropress, Chemex, and V60.",
      },
      {
        type: "espresso",
        text: "Dense and finely ground beans for an intense, flavorful experience.",
      },
    ],
  },
  {
    id: 2,
    setName: "Bean Type",
    heading: "What type of coffee?",
    options: [
      {
        type: "single origin",
        text: "Distinct, high quality coffee from a specific family-owned farm.",
      },
      {
        type: "decaf",
        text: "Just like regular coffee, except the caffeine has been removed.",
      },
      {
        type: "blended",
        text: "Combination of two or three dark roasted beans of organic coffees.",
      },
    ],
  },
  {
    id: 3,
    setName: "Quantity",
    heading: "How much would you like?",
    options: [
      {
        type: "250g",
        text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        type: "500g",
        text: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        type: "1000g",
        text: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: 4,
    setName: "Grind Option",
    heading: "Want us to grind them?",
    options: [
      {
        type: "wholebean",
        text: "Best choice if you cherish the full sensory experience.",
      },
      {
        type: "filter",
        text: "For drip or pour-over coffee methods such as V60 or Aeropress.",
      },
      {
        type: "cafetiére",
        text: "Course ground beans specially suited for french press coffee.",
      },
    ],
  },
  {
    id: 5,
    setName: "Deliveries",
    heading: "How often should we deliver?",
    options: [
      {
        type: "every week",
        text: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        type: "every 2 weeks",
        text: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        type: "every month",
        text: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];
