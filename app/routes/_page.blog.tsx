import type { MetaFunction } from "@remix-run/cloudflare";
import "../routeStyles/_page.blog.css";
import blog from "~/config/blog";
import { description, title } from "~/config/constants";

export const meta: MetaFunction = () => {
  return [
    { title: `Blog - ${title}` },
    { name: "description", content: description },
  ];
};

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <div className="page-blog_grid">
        {blog.map((post) => (
          <a href={post.url}>
            <div
              className="page-blog_box"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>
            <p className="page-blog_date">{post.date}</p>
            <p className="page-blog_heading">{post.title}</p>
          </a>
        ))}
      </div>
    </>
  );
}
