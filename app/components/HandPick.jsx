import Image from "next/image";
import React from "react";
import recipes from "../../data/recipes.json";
import categories from "../../data/categories.json";
import Link from "next/link";

export default function HandPick() {
  const sortByAvgRating = recipes
    .sort((a, b) => {
      return b.rating.average_rating - a.rating.average_rating;
    })
    .slice(0, 2);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {sortByAvgRating.map((recipe) => {
          const categoryName = categories.find(
            (category) => category.id === recipe.category_id
          )?.name;
          return (
            <div
              key={recipe.title}
              className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
            >
              <div className="relative w-full h-[400px]">
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
                  <Image
                    src={recipe.thumbnail}
                    alt="Sushi Combos"
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <a
                  href="./recipes.html"
                  className="text-orange-300 hover:underline"
                >
                  View Collection
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
