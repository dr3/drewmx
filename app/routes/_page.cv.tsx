import {
  redirect,
  type MetaFunction,
  LoaderFunction,
} from "@remix-run/cloudflare";
import "../routeStyles/_page.projects.css";
import { description, title } from "~/config/constants";

export const meta: MetaFunction = () => {
  return [
    { title: `Projects - ${title}` },
    { name: "description", content: description },
  ];
};

export const loader: LoaderFunction = async () => {
  return redirect("/cv.pdf");
};

export default function Projects() {
  return (
    <>
      <h1>CV</h1>

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
      </div>

      <div
        className="page-projects_box"
        style={{ borderColor: "#faad14", backgroundColor: "#faad14" + "1a" }}
      >
        <h2>Card Sign</h2>
        <div className="page-projects_box_link">
          <a href="https://card-sign.com">card-sign.com</a>
        </div>
        <p>Hehe</p>
      </div>
    </>
  );
}
