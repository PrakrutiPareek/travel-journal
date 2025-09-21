export default function Entry(props) {
  return (
    <article>
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.entry.img.src}
          alt={props.entry.img.alt}
        />
      </div>
      <div className="info-container">
        <div className="first-line">
          <img src="/Images/marker.png" alt="location-img" />
          <span>{props.entry.country}</span>
          <a href={props.entry.googleMapsLink}>Veiw on Google Maps</a>
        </div>
        <h2>{props.entry.title}</h2>
        <h4> {props.entry.dates} </h4>
        <p>{props.entry.text}</p>
      </div>
    </article>
  );
}
