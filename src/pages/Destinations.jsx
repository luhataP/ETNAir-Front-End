import "./Destinations.css"

const destinations = [
    { name: "Paris", image: "/destinations/paris.avif", alt: "Paris" },
    { name: "Lyon", image: "/destinations/lyon.webp", alt: "Lyon" },
    { name: "Marseille", image: "/destinations/marseille.jpg", alt: "Marseille" },
    { name: "Bordeaux", image: "/destinations/bordeaux.jpg", alt: "Bordeaux" },
    { name: "Toulouse", image: "/destinations/toulouse.jpg", alt: "Toulouse" },
    { name: "Montpellier", image: "/destinations/montpellier.jpg", alt: "Montpellier" },
    { name: "Lille", image: "/destinations/lille.jpg", alt: "Lille" },
    { name: "Nice", image: "/destinations/nice.webp", alt: "Nice" },
]

export default function Destinations() {
    return (
        <div className="destinations-page">
            <h1 className="page-title">Destinations</h1>
            <p className="page-subtitle">
                Explorez les villes, régions et lieux populaires.
            </p>
            
            <section className="destinations-grid">
                {destinations.map((city) => (
                    <div className="destination-card">
                        <img src={city.image} alt={city.name} />
                        <h2>{city.name}</h2>
                    </div>
                ))}
            </section>
        </div>
    );
}