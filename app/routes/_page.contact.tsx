import type { MetaFunction } from "@remix-run/cloudflare";
import links from "~/config/links";

export const meta: MetaFunction = () => {
  return [
    { title: "Drew McMillan - Web Engineer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Contact</h1>
      <p>Feel free to send me a message, I would love to grab a coffee!</p>
      {Object.entries(links).map(([name, link]) => (
        <p key={link.url + "contact"}>
          {name}: <a href={link.url}>{link.text}</a>
        </p>
      ))}
    </>
  );
}
