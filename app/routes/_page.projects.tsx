import type { MetaFunction } from "@remix-run/cloudflare";
import "../routeStyles/_page.projects.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Drew McMillan - Web Engineer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>

      <div className="page-projects_box" style={{ borderColor: "#e68abc" }}>
        <h2>Parallel Maths</h2>
        <div className="page-projects_box_link">
          <a href="https://parallel.org.uk">parallel.org.uk</a>
        </div>
        <p>Hehe</p>
      </div>

      <div className="page-projects_box" style={{ borderColor: "#faad14" }}>
        <h2>Card Sign</h2>
        <div className="page-projects_box_link">
          <a href="https://card-sign.com">card-sign.com</a>
        </div>
        <p>Hehe</p>
      </div>
    </>
  );
}
