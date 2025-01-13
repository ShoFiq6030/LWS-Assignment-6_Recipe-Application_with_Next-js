import Image from "next/image";
import React from "react";

export default function SuperDelicious() {
  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="relative w-full h-[300px]">
            <Image
              src="/thumbs/thumb-5.jpg"
              alt="Chicken Meatball with Creamy Cheese"
              layout="fill"
              objectFit="cover" // Ensures the image covers the container
              className="rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Chicken Meatball with Creamy Cheese
          </h3>
          <div className="flex items-center text-yellow-500 mb-2"></div>
          <p className="text-gray-600">30 Minutes</p>
        </div>
        <div>
          <div className="relative w-full h-[300px]">
            <Image
              src="/thumbs/thumb-6.jpg"
              alt="The Creamiest Creamy Chicken"
              layout="fill"
              objectFit="cover" // Ensures the image covers the container
              className="rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            The Creamiest Creamy Chicken
          </h3>
          <div className="flex items-center text-yellow-500 mb-2"></div>
          <p className="text-gray-600">45 Minutes</p>
        </div>
        <div>
          <div className="relative w-full h-[300px]">
            <Image
              src="/thumbs/thumb-7.jpg"
              alt="Beef Burger"
              layout="fill"
              objectFit="cover" // Ensures the image covers the container
              className="rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Beef Burger</h3>
          <div className="flex items-center text-yellow-500 mb-2"></div>
          <p className="text-gray-600">30 Minutes</p>
        </div>
      </div>
    </section>
  );
}
