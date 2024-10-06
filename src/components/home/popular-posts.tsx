"use client";

import { popularPosts } from "@/lib/placeholder-data";
import React from "react";
import { Icons } from "../icons";
// import { useSWR, unstable_serialize, SWRConfig } from "swr";
import useSWR from "swr";
import { fetcher, fetchUrl } from "@/lib/utils";
export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul className="overflow-auto">
      {data?.map((post) => (
        <li
          key={post.title}
          className="flex items-center gap-2 group cursor-pointer py-2"
        >
          <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
}
