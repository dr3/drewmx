import type { MetaFunction } from "@remix-run/cloudflare";
import "../routeStyles/_page.photos.css";
import photos from "~/config/photos";
import { description, title } from "~/config/constants";

export const meta: MetaFunction = () => {
  return [
    { title: `Photos - ${title}` },
    { name: "description", content: description },
  ];
};

export default function Index() {
  return (
    <>
      <h1 className="page-photos_heading">Photos</h1>
      <p className="page-photos_description">
        All photos taken with a Fujifilm X100S and edited using Lightroom
      </p>
      {photos.map((photo) => (
        <a
          key={photo.url + "photo"}
          href={photo.url}
          className="page-photos_image_wrapper"
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="page-photos_image"
            style={{ aspectRatio: `${photo.width}/${photo.height}` }}
          />
        </a>
      ))}
    </>
  );
}
