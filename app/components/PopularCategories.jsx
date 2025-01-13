import Image from "next/image";
import Link from "next/link";
import React from "react";
import categories from "../../data/categories.json";

export default function PopularCategories() {
  const popularCategories = categories.slice(0, 6);
  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/categories" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {popularCategories.map((category) => (
          <div key={category.id} className="cursor-pointer text-center group">
            <div className="relative overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
              <Link href={`/recipes/${category.name}/${category.id}`}>
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
