import Image from "next/image";
import React from "react";

export default function LatestRecipes() {
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
        <div>
          <div className="relative w-full h-[300px]">
            <Image
              src="https://plus.unsplash.com/premium_photo-1664472634106-1430c3973e68?q=100&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Creamy Garlic Pasta"
              layout="fill"
              objectFit="cover"
              className="  rounded-lg mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Creamy Garlic Pasta</h3>
          <p className="text-gray-600">Pasta</p>
        </div>
        <div>
          <div className=" relative w-full h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1694067508035-6cccccb95cb0?q=100&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blueberry Muffins"
              layout="fill"
              objectFit="cover"
              className="  rounded-lg mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Blueberry Muffins</h3>
          <p className="text-gray-600">Breakfast</p>
        </div>
        <div>
          <div className=" relative w-full h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=100&w=1671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chicken Tikka Masala"
              layout="fill"
              objectFit="cover"
              className="  rounded-lg mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Chicken Tikka Masala</h3>
          <p className="text-gray-600">Dinner</p>
        </div>
      </div>
    </section>
  );
}
