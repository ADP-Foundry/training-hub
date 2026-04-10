import { categories } from "./utils";

export interface MenuItem {
  id: number;
  title: string;
  price: string;
  description: string;
  category: "mains" | "appetizers" | "desserts";
  image: string;
  isSpecial?: boolean;
}

export type Categories = (typeof categories)[number];

export interface FilterNavButtonProps {
  setActiveTab: (category: string) => void;
  activeTab: string;
  categories: string[];
}

export type EmptyMenuProps = Pick<FilterNavButtonProps, "activeTab"> & {
  filteredItems: MenuItem[];
};
