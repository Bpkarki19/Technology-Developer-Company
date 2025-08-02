import "./gallery.css";
import galleryImage from "./data.json";

function MyGallery() {
  return (
    <div className="galleryContainer">
      {galleryImage.map((image) => (
        <>
          <div className="cardContainer" style={{backgroundColor: image.color}}>
            <h3>{image.title}</h3>
            <div key={image.id} className="imagecontainer">
              <img className="img" src={image.src} alt={image.title}></img>
            </div>
            <p>{image.description}</p>
            <button className="button">view more</button>
          </div>
        </>
      ))}
    </div>
  );
}

export default MyGallery;
