import Image from "next/image";
import React from "react";
import recipes from "../../data/recipes.json";
import categories from "../../data/categories.json";
import Link from "next/link";

export default function SuperDelicious() {
  const sortByRatingCount = recipes
    .sort((a, b) => {
      return b.rating.rating_count - a.rating.rating_count;
    })
    .slice(0, 3);
  console.log(sortByRatingCount);
  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {sortByRatingCount.map((recipe) => {
          const categoryName = categories.find(
            (category) => category.id === recipe.category_id
          )?.name;

          return (
            <div key={recipe.title}>
              <Link
                href={{
                  pathname: `/recipeDetails/${categoryName}/${recipe.title}`,
                  query: {
                    category_id: recipe.category_id,
                    title: recipe.title,
                    description: recipe.description,
                    published_date: recipe.published_date,
                    cooking_time: recipe.cooking_time,
                    author: recipe.author,
                    thumbnail: recipe.thumbnail,
                  },
                }}
              >
                <div className="w-full h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src={recipe.thumbnail}
                    alt="Chicken Meatball with Creamy Cheese"
                    width={200}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded-lg overflow-hidden"
                  />
                </div>
              </Link>
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <div className="flex items-center text-yellow-500 mb-2"></div>
              <p className="text-gray-600">30 Minutes</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
