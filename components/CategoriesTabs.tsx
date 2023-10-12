import React, { useState } from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ItemCard } from "@/components/ItemCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Category {
  value: string;
  label: string;
}
interface Item {
  photoUrl: string;
  name: string;
  sizeOptions: string[];
  quantityAvailable: number;
  category: string;
}

interface TabsProps {
  categories: Category[];
  items: Item[];
}

export const CategoriesTabs: React.FC<TabsProps> = ({ categories, items }) => {
  const selectedTab = categories[0].value;

  const filteredItems = items.filter((item) => item.category === selectedTab);

  return (
    <div>
      <Tabs defaultValue={categories[0].value}>
        <ScrollArea className="max-w-full lg:max-w-none">
          <TabsList className="flex ">
            {categories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={category.value}
                className="p-auto w-full sm:w-full"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
        <TabsContent value={selectedTab}>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
            {filteredItems.map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
