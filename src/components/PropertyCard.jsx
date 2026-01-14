import "./PropertyCard.css";

export default function PropertyCard({ title, location, price, image }) {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={title} />
      </div>

      <div className="property-info">
        <h4>{title}</h4>
        <p className="location">{location}</p>
        <p className="price">{price} € / nuit</p>
      </div>
    </div>
  );
}
