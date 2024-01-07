import type { MetaFunction } from "@remix-run/cloudflare";
import "../routeStyles/_page.photos.css";
import photos from "~/config/photos";

export const meta: MetaFunction = () => {
  return [
    { title: "Drew McMillan - Web Engineer" },
    { name: "description", content: "Welcome to Remix!" },
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
        <a key={photo.url + "photo"} href={photo.url}>
          <img src={photo.url} alt={photo.alt} className="page-photos_image" />
        </a>
      ))}
    </>
  );
}
