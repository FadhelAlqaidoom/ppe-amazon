'use client';

import React from 'react';
import { CategoriesTabs } from '@/components/CategoriesTabs';
import { Tabs } from '@radix-ui/react-tabs';

const categories = [
  { value: 'hand_protection', label: 'Hand protection' },
  { value: 'eye_protection', label: 'Eye protection' },
  { value: 'head_protection', label: 'Head protection' },
  { value: 'safety_arc_suit', label: 'Safety Arc Suit' },
  { value: 'others', label: 'Others' },
];

const items = [
  {
    photoUrl: '/glovesimg.jpeg',
    name: 'Item 1',
    sizeOptions: ['Small', 'Medium', 'Large'],
    quantityAvailable: 10,
    category: 'hand_protection',
  },
  {
    photoUrl: '/glovesimg.jpeg',
    name: 'Item 1',
    sizeOptions: ['Small', 'Medium', 'Large'],
    quantityAvailable: 10,
    category: 'hand_protection',
  },
  {
    photoUrl: '/glovesimg.jpeg',
    name: 'Item 1',
    sizeOptions: ['Small', 'Medium', 'Large'],
    quantityAvailable: 10,
    category: 'hand_protection',
  },
  {
    photoUrl: '/glovesimg.jpeg',
    name: 'Item 1',
    sizeOptions: ['Small', 'Medium', 'Large'],
    quantityAvailable: 10,
    category: 'hand_protection',
  },
  {
    photoUrl: '/glovesimg.jpeg',
    name: 'Item 1',
    sizeOptions: ['Small', 'Medium', 'Large'],
    quantityAvailable: 10,
    category: 'hand_protection',
  },
  {
    photoUrl: '/glovesimg.jpeg',
    name: 'Item 1',
    sizeOptions: ['Small', 'Medium', 'Large'],
    quantityAvailable: 10,
    category: 'hand_protection',
  },
];

// const Order = () => {
//   return (
//     <div className="flex flex-col items-start min-h-screen bg-gray-50 px-4 p-20">
//       <div className="w-full max-w-7xl mx-auto">
//         <Tabs categories={categories} />
//         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {items.map((item, index) => (
//             <ItemCard key={index} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
const Order = () => {
  return (
    <div className="flex flex-col items-start min-h-screen px-4 p-20">
      <div className="w-full max-w-7xl mx-auto">
        <CategoriesTabs categories={categories} items={items} />
      </div>
    </div>
  );
};

export default Order;
