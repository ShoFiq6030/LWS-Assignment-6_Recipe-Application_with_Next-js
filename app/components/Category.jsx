import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category({ category }) {
  return (
    <div className="text-center ">
      <Link
        href={`/recipes/${category.name}/${category.id}`}
        className="overflow-hidden  mb-4 relative cursor-pointer"
      >
        <Image
          src={category.image}
          alt="Seafood"
          width={300}
          height={200}
          className="rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </Link>
      <h2 className="text-xl font-semibold">{category.name}</h2>
    </div>
  );
}
