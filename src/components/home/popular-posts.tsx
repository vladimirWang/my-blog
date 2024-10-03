import { popularPosts } from "@/lib/placeholder-data";
import React from "react";
import { Icons } from "../icons";

export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <li
          key={post.title}
          className="flex items-center gap-2 cursor-pointer py-2"
        >
          <Icons.arrowRight className="h-6 w-6" />
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
}
