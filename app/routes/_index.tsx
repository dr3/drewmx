import type { MetaFunction } from "@remix-run/cloudflare";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Drew McMillan - Web Engineer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (<>
    <Header />
    <main>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </main>
    <Footer />
  </>
  );
}
