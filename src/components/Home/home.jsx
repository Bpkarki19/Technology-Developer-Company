import "./home.css";

import data from "./homeData.json";

function Home() {
  return (
    <div className="homeContainer">
      {data.map((item, index) => (
        <section className="hero">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </section>
      ))}
    </div>
  );
}

export default Home;
