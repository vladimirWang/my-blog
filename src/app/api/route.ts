import { db } from "@/db";

function sleep(ms = 2000) {
  return new Promise((r) => {
    setTimeout(() => {
      r(undefined);
    }, ms);
  });
}

export async function GET() {
  try {
    // await sleep();
    const data = await db.blog.findMany({
      take: 10,
      select: {
        title: true,
        category: true,
        slug: true,
      },
      orderBy: [{ view_count: "desc" }],
    });
    return Response.json(data);
  } catch (error) {
    console.error("database error: ", error);
    throw new Error("fail to fetch the popular post");
  }
}

export async function POST(request: Request) {
  const { slug, title, category } = await request.json();
  try {
    const existingPost = await db.blog.findUnique({
      where: { slug },
    });
    if (existingPost) {
      await db.blog.update({
        where: { slug },
        data: { view_count: { increment: 1 } },
      });
    } else {
      await db.blog.create({
        data: {
          slug,
          title,
          category,
        },
      });
    }
  } catch (error) {
    console.error("update page view fail", error);
    return new Response("fail to post to db", { status: 500 });
  }
  return new Response("Successfully posted to DB", { status: 200 });
}
