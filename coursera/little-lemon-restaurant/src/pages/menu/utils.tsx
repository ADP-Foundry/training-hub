import type { MenuItem } from "./type";

import GreekSalad from "@/assets/greek-salad.jpg";
import Bruschetta from "@/assets/bruchetta.svg";
import GrilledSeaBass from "@/assets/grilled-seabass.jpg";

export const categories = ["all", "appetizers", "mains", "desserts"];

export const menuData: MenuItem[] = [
  {
    id: 1,
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.",
    category: "appetizers",
    image: GreekSalad,
    isSpecial: true,
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt.",
    category: "appetizers",
    image: Bruschetta,
  },
  {
    id: 3,
    title: "Grilled Sea Bass",
    price: "20.00",
    description:
      "Freshly caught sea bass grilled with lemon, herbs, and Mediterranean spices.",
    category: "mains",
    image: GrilledSeaBass,
  },
];
