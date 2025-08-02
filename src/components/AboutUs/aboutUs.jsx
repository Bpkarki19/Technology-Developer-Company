import "./aboutUs.css";
import data from './aboutUS.json'

function AboutUs() {
  return (
    <section className="about-us">
      {data.map((item, index) => (
        <article className="info" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

export default AboutUs;
