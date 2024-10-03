import { getBlogPosts } from "@/app/blog/utils";

export default function LatestPosts() {
  let latestPosts = getBlogPosts();
  return (
    <>
      <h1>Recently Published</h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug}>{post.metadata.title}</article>
        ))}
    </>
  );
}
