import type { MetaFunction } from "@remix-run/cloudflare";
import { description, title } from "~/config/constants";
import links from "~/config/links";

export const meta: MetaFunction = () => {
  return [
    { title: `Contact - ${title}` },
    { name: "description", content: description },
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
