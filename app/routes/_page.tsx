import type { MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Drew McMillan - Web Engineer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
