import type { MetaFunction } from "@remix-run/cloudflare";
import "../routeStyles/_page._index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Drew McMillan - Web Engineer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="page-index_grid">
      <div>
        <h1>Hey! I'm Drew 👋</h1>
        <div>
          <p>
            I am a Staff Engineer currently working at{" "}
            <a href="https://www.thetrainline.com/">Trainline</a>. I’m primarily
            use a stack of Typescript, React, & Node to build Europe’s leading
            train and coach website. Most recently i’ve worked on updating our
            primary website to utilise a new GraphQL layer that will serve data
            to millions of people!
          </p>
          <p>
            I’m a keen developer, always looking to learn about new technologies
            and how it improve both the development and user experience. Feel
            free to take a look at my <a href="/cv">CV</a>, I’m always
            interested in hearing about new opportunities.
          </p>
        </div>
      </div>
      <img
        className="page-index_image"
        src="/images/drew-3r8ues0w.jpeg"
        alt="Photo of Drew"
      />
    </div>
  );
}
