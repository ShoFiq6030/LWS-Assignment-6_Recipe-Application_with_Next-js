import Image from "next/image";
import recipes from "../../data/recipes.json";
import categories from "../../data/categories.json";
import Link from "next/link";

export default function YouMayLike({ category_id }) {
  const categoryWiseRecipes = recipes.filter((recipe) => {
    return recipe.category_id === category_id;
  });

  const categoryName = categories.find(
    (category) => category.id === category_id
  )?.name;

  const sortRecipes = categoryWiseRecipes
    .sort((a, b) => {
      return a.rating.average_rating - b.rating.average_rating;
    })
    .slice(0, 4);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sortRecipes.map((recipe) => (
          <Link
            key={recipe.title}
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
            <div className="relative w-full lg:max-h-80 overflow-hidden">
              <Image
                src={recipe.thumbnail}
                alt="Recipe 1"
                objectFit="cover"
                layout="responsive"
                width={200}
                height={150}
                className=" object-cover rounded-lg mb-2"
              />
            </div>
            <h3 className="font-semibold">{recipe.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
