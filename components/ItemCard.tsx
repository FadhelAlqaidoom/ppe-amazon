import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface Item {
  photoUrl: string;
  name: string;
  sizeOptions: string[];
  quantityAvailable: number;
  category: string;
}

interface CardProps {
  item: Item;
}

export const ItemCard: React.FC<CardProps> = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);

  return (
    <Card>
      <CardHeader>
        <div className="relative h-48 w-full">
          <Image
            src={item.photoUrl}
            alt={item.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2 text-xl font-bold">{item.name}</CardTitle>
        <Select>
          <SelectTrigger className="w-full">
            {selectedSize ? (
              <span>{selectedSize}</span>
            ) : (
              <SelectValue placeholder="Select size" />
            )}
          </SelectTrigger>
          <SelectContent>
            {item.sizeOptions.map((size, index) => (
              <SelectItem
                key={index}
                value={size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <CardDescription className="my-2">
          Quantity Available: {item.quantityAvailable}
        </CardDescription>

        <div className="my-2">
          <label
            htmlFor="orderQuantity"
            className="block text-sm font-medium text-gray-700"
          >
            Order Quantity
          </label>
          <Input
            id="orderQuantity"
            type="number"
            value={orderQuantity}
            onChange={(e) => setOrderQuantity(Number(e.target.value))}
            min={1}
            max={item.quantityAvailable}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => alert("Item added to cart")} className="w-full">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};
