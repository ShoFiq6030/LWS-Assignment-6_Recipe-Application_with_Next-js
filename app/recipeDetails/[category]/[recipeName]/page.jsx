import RecipeDetails from "@/app/components/RecipeDetails";
import YouMayLike from "@/app/components/YouMayLike";

import React from "react";

export default function RecipeDetailsPage({ searchParams }) {
  const {
    title,
    description,
    thumbnail,
    category_id,
    published_date,
    cooking_time,
    author,
  } = searchParams;

  return (
    <main className="container mx-auto px-4 py-8 mt-[70px]">
      <RecipeDetails
        recipeDetails={{
          title,
          description,
          thumbnail,
          category_id,
          published_date,
          cooking_time,
          author,
        }}
      />
      <YouMayLike category_id={category_id} />
    </main>
  );
}
