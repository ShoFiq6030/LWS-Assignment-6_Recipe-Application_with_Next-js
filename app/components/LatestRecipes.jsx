import Image from "next/image";
import React from "react";
import recipes from "../../data/recipes.json";
import categories from "../../data/categories.json";
import Link from "next/link";

export default function LatestRecipes() {
  const sortByDate = recipes
    .sort((a, b) => {
      return new Date(b.published_date) - new Date(a.published_date);
    })
    .slice(0, 4);

  return (
    <section className="mb-16" id="latest">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {sortByDate.map((recipe) => {
          const categoryName = categories.find(
            (category) => category.id === recipe.category_id
          )?.name;
          return (
            <>
              <div key={recipe.title}>
                <div className=" relative w-full h-[300px]">
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
                      alt={recipe.title}
                      layout="fill"
                      objectFit="cover"
                      className="  rounded-lg mb-4"
                    />
                  </Link>
                </div>
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600">{categoryName}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
