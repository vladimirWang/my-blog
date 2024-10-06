import React from "react";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import Container from "@/components/Container";
import { notFound } from "next/navigation";
import CardCategory from "@/components/card-category";
import Header from "@/components/Header";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => {
    return {
      category: post.metadata.category,
    };
  });
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );
  if (!posts.length) {
    notFound();
  }
  return (
    <>
      <Header>
        <Container>
          <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">
            {params.category}
          </h1>
        </Container>
      </Header>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              return new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
                ? -1
                : 1;
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
