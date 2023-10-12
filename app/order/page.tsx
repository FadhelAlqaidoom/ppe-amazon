"use client";

import React from "react";
import { CategoriesTabs } from "@/components/CategoriesTabs";
import { Tabs } from "@radix-ui/react-tabs";

const categories = [
  { value: "hand_protection", label: "Hand protection" },
  { value: "eye_protection", label: "Eye protection" },
  { value: "head_protection", label: "Head protection" },
  { value: "safety_arc_suit", label: "Safety Arc Suit" },
  { value: "others", label: "Others" },
];

const items = [
  {
    photoUrl: "/glovesimg.jpeg",
    name: "Item 1",
    sizeOptions: ["Small", "Medium", "Large"],
    quantityAvailable: 10,
    category: "hand_protection",
  },
  {
    photoUrl: "/glovesimg.jpeg",
    name: "Item 1",
    sizeOptions: ["Small", "Medium", "Large"],
    quantityAvailable: 10,
    category: "hand_protection",
  },
  {
    photoUrl: "/glovesimg.jpeg",
    name: "Item 1",
    sizeOptions: ["Small", "Medium", "Large"],
    quantityAvailable: 10,
    category: "hand_protection",
  },
  {
    photoUrl: "/glovesimg.jpeg",
    name: "Item 1",
    sizeOptions: ["Small", "Medium", "Large"],
    quantityAvailable: 10,
    category: "hand_protection",
  },
  {
    photoUrl: "/glovesimg.jpeg",
    name: "Item 1",
    sizeOptions: ["Small", "Medium", "Large"],
    quantityAvailable: 10,
    category: "hand_protection",
  },
  {
    photoUrl: "/glovesimg.jpeg",
    name: "Item 1",
    sizeOptions: ["Small", "Medium", "Large"],
    quantityAvailable: 10,
    category: "hand_protection",
  },
];

const Order = () => {
  return (
    <div className=" flex min-h-screen flex-col items-start px-4 pt-20">
      <div className="mx-auto w-full max-w-7xl">
        <CategoriesTabs categories={categories} items={items} />
      </div>
    </div>
  );
};

export default Order;
