import Recipes from "@/app/components/Recipes";
import Image from "next/image";
import React from "react";

import recipes from "../../../../data/recipes.json";

export default function RecipesCategoryPage({ params }) {
  const { recipesCategory } = params;
  const { categoryId } = params;

  const categoryItems = recipes.filter(
    (recipe) => recipe.category_id === categoryId
  );

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {recipesCategory}
            <span className="text-gray-500 text-2xl font-normal">
              ({categoryItems.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoryItems.map((categoryItem) => (
          <Recipes
            key={categoryItem.title}
            categoryItem={categoryItem}
            recipesCategory={recipesCategory}
          />
        ))}
      </div>
    </main>
  );
}
