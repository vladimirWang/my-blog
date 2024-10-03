import LatestPosts from "@/components/home/latest-posts";
import MainNav from "@/components/ui/main-nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </>
  );
}
