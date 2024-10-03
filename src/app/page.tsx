import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/main-nav";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </Container>
  );
}
