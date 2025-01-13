import Image from "next/image";
import React from "react";

export default function Recipes({ categoryItem, recipesCategory }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Image
        src={categoryItem.thumbnail}
        alt="Decadent Raspberry and Cream Cake"
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{categoryItem.title}</h2>
      </div>
    </div>
  );
}
