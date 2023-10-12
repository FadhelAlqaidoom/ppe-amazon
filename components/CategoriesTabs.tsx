import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ItemCard } from "@/components/ItemCard";

interface Category {
  value: string;
  label: string;
}
interface Item {
  photoUrl: string;
  name: string;
  sizeOptions: string[];
  quantityAvailable: number;
  category: string; // Adding category property based on your requirements
}

interface TabsProps {
  categories: Category[];
  items: Item[]; // Ensure Item type is imported or defined
}

export const CategoriesTabs: React.FC<TabsProps> = ({ categories, items }) => {
  const [selectedTab, setSelectedTab] = useState(categories[0].value);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const filteredItems = items.filter((item) => item.category === selectedTab);

  return (
    <div>
      <Tabs defaultValue={categories[0].value}>
        <TabsList>
          {categories.map((category, index) => (
            <TabsTrigger key={index} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={selectedTab}>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {filteredItems.map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
