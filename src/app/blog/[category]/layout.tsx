import Container from "@/components/Container";
import { MainNav } from "@/components/main-nav";
import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
        </Container>
      </div>
      {children}
    </>
  );
}
