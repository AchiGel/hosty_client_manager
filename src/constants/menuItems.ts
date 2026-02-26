export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  available: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Georgian Khachapuri",
    category: "Main Course",
    price: "₾25",
    available: true,
  },
  {
    id: 2,
    name: "Khinkali (10 pcs)",
    category: "Main Course",
    price: "₾18",
    available: true,
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Starters",
    price: "₾15",
    available: true,
  },
  {
    id: 4,
    name: "Grilled Salmon",
    category: "Main Course",
    price: "₾35",
    available: false,
  },
  {
    id: 5,
    name: "Tiramisu",
    category: "Desserts",
    price: "₾12",
    available: true,
  },
];
