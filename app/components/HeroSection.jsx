import Image from "next/image";

import React from "react";
import recipes from "../../data/recipes.json";
import categories from "../../data/categories.json";
import Link from "next/link";

export default function HeroSection() {
  const categoryName = categories.find(
    (category) => category.id === recipes[1].category_id
  )?.name;

  console.log(categoryName);
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[450px] ">
          <Image
            src={recipes[1].thumbnail}
            alt={recipes[1].title}
            layout="fill"
            objectFit="cover"
            className=" object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{recipes[1].title}</h1>
          <p className="text-gray-600 mb-4">{recipes[1].description}.</p>
          <Link
            href={{
              pathname: `/recipeDetails/${categoryName}/${recipes[1].title}`,
              query: {
                category_id: recipes[1].category_id,
                title: recipes[1].title,
                description: recipes[1].description,
                published_date: recipes[1].published_date,
                cooking_time: recipes[1].cooking_time,
                author: recipes[1].author,
                thumbnail: recipes[1].thumbnail,
              },
            }}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
