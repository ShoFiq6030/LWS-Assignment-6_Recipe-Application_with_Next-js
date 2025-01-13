import Image from "next/image";
import React from "react";
import recipes from "../../data/recipes.json";
import categories from "../../data/categories.json";

export default function LatestRecipes() {
  const sortByDate = recipes
    .sort((a, b) => {
      return b.published_date - a.published_date;
    })
    .slice(0, 4);
  console.log(sortByDate);
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className=" relative w-full h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1559564121-d12c8f29e8cd?q=100&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Strawberry Cream"
              layout="fill"
              objectFit="cover"
              className="  rounded-lg mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Strawberry Cream</h3>
          <p className="text-gray-600">Dessert</p>
        </div>
      </div>
    </section>
  );
}
