import React from "react";
import { formatDate, getBlogPosts } from "../../utils";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumb-with-custom-separator";
import CustomMDX from "@/components/mdx";

export default function Slug({
  params,
}: {
  params: { slug: string; category: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            slug={post.slug}
            category={post.metadata.category}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
}
