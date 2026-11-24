
import React from "react";
import {
  ShoppingBag,
  Shirt,
  Smartphone,
  Laptop,
  Brush,
  House,
  Tv,
  ToyBrick,
  Utensils,
  CarFront,
  Dumbbell,
  Sofa,
  BookOpen,
  Bike,
} from "lucide-react";

import "./CategoryNavbar.css";

const categories = [
  { name: "For You", icon: ShoppingBag },
  { name: "Fashion", icon: Shirt },
  { name: "Mobiles", icon: Smartphone },
  { name: "Electronics", icon: Laptop },
  { name: "Beauty", icon: Brush },
  { name: "Home", icon: House },
  { name: "Appliances", icon: Tv },
  { name: "Toys, ba...", icon: ToyBrick },
  { name: "Food & H...", icon: Utensils },
  { name: "Auto Acc...", icon: CarFront },
  { name: "Sports & ...", icon: Dumbbell },
  { name: "Furniture", icon: Sofa },
  { name: "Books", icon: BookOpen },
  { name: "2 Wheele...", icon: Bike },
];

export default function CategoryNavbar() {
  const [activeCategory, setActiveCategory] = React.useState("For You");

  return (
    <div className="category-navbar">
      <div className="category-list">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.name;

          return (
            <div
              key={category.name}
              className={`category-item ${isActive ? "active" : ""}`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="category-icon-box">
                <Icon
                  size={37}
                  strokeWidth={1.6}
                  className="category-icon"
                />
              </div>

              <span className="category-name">
                {category.name}
              </span>

              {isActive && <div className="active-underline"></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
