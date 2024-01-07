import type { MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import { description, title } from "~/config/constants";

export const meta: MetaFunction = () => {
  return [{ title }, { name: "description", content: description }];
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
