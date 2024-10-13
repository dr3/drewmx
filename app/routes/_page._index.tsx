import "../routeStyles/_page._index.css";

export default function Index() {
  return (
    <div className="page-index_grid">
      <div>
        <h1>Hey! I'm Drew 👋</h1>
        <div>
          <p>
            I am a Staff Engineer (Web) currently at{" "}
            <a href="https://www.thetrainline.com/">Trainline</a>. Currently
            focused on Tech Modernisation through the use of GraphQL, making
            engineers faster to deliver changes to millions of customers.
          </p>
          <p>
            I am also the lead engineer for a maths charity called{" "}
            <a href="https://parallel.org.uk/">Parallel</a>. We have thousands
            of students completing weekly worksheets, live webinars and tutorial
            classes.
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
