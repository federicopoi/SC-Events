import React from "react";

export default function CategoriesCard({ title, img }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
      ></img>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-center">{title}</div>
      </div>
    </div>
  );
}
