import type { MetaFunction } from "@remix-run/cloudflare";
import "../routeStyles/_page.projects.css";
import { description, title } from "~/config/constants";

export const meta: MetaFunction = () => {
  return [
    { title: `Projects - ${title}` },
    { name: "description", content: description },
  ];
};

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>

      <div
        className="page-projects_box"
        style={{ borderColor: "#e68abc", backgroundColor: "#e68abc" + "1a" }}
      >
        <h2>Parallel Maths</h2>
        <div className="page-projects_box_link">
          <a href="https://parallel.org.uk">parallel.org.uk</a>
        </div>
        <p>
          A charitable mathematics project founded and run by bestselling
          science author and maths educator,{" "}
          <a href="https://en.wikipedia.org/wiki/Simon_Singh">Simon Singh</a>.
        </p>
        <p>
          A site for weekly problem sheets when I joined the project, I have
          worked to bring live webinars and tutorials used by hundreds of
          students a week. Leveraging{" "}
          <a href="https://aws.amazon.com/appsync/">AWS AppSync</a> GraphQL
          Subscriptions, the site offers instant updates for students viewing
          "Maths Circles" Live streams, joining small group "Tutorials" or
          interacting with live quizzes in real time.
        </p>
      </div>

      <div
        className="page-projects_box"
        style={{ borderColor: "#faad14", backgroundColor: "#faad14" + "1a" }}
      >
        <h2>Card Sign</h2>
        <div className="page-projects_box_link">
          <a href="https://card-sign.com">card-sign.com</a>
        </div>
        <p>
          Sick of sites requiring sign ups, spamming emails and wanted to
          upsell, I built Card Sign as a simplier alternative to the existing
          eCard sites.
        </p>
        <p>
          Built using Remix & DynamoDB, Card Sign offers a simple method of
          creating, signing and sharing eCards.
        </p>
      </div>
    </>
  );
}
