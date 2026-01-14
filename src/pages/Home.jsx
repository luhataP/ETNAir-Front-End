import CategoryFilter from "../components/CategoryFilter";
import PropertyCard from "../components/PropertyCard";
import { useState } from "react";
import "./Home.css"

const homeSections = [
  {
    title: "Nouveautés",
    properties: [
      {
        id: 1,
        title: "Cabane en forêt",
        location: "Vosges",
        price: 70,
        image: "/vosges.jpg",
      },
      {
        id: 2,
        title: "Studio à Montparnasse",
        location: "Paris",
        price: 120,
        image: "/montparnasse.jpg",
      },
    ],
  },
  {
    title: "Destinations",
    properties: [
      {
        id: 3,
        title: "Appartement vue mer",
        location: "Nice",
        price: 150,
        image: "/nice.jpg",
      },
      {
        id: 4,
        title: "Maison de charme",
        location: "Bordeaux",
        price: 95,
        image: "/bordeaux.jpg",
      },
    ],
  },
  {
    title: "Tout près de chez vous",
    properties: [
      {
        id: 5,
        title: "Studio cosy",
        location: "Lille",
        price: 80,
        image: "/lille.jpg",
      },
      {
        id: 6,
        title: "Loft moderne",
        location: "Roubaix",
        price: 85,
        image: "/roubaix.jpg",
      },
    ],
  },
  {
    title: "Tendances",
    properties: [
      {
        id: 7,
        title: "Chalet avec vue",
        location: "Chamonix",
        price: 180,
        image: "/chamonix.jpg",
      },
      {
        id: 8,
        title: "Villa design",
        location: "Ibiza",
        price: 320,
        image: "/ibiza.jpg",
      },
    ],
  },
  {
    title: "Campagne",
    properties: [
      {
        id: 9,
        title: "Gîte rural",
        location: "Dordogne",
        price: 90,
        image: "/dordogne.jpg",
      },
      {
        id: 10,
        title: "Ferme rénovée",
        location: "Normandie",
        price: 110,
        image: "/normandie.jpg",
      },
    ]
  },
  {
    title: "Montagne",
    properties: [
      {
        id: 11,
        title: "Chalet avec vue",
        location: "Chamonix",
        price: 180,
        image: "/chamonix.jpg",
      },
      {
        id: 12,
        title: "Refuge alpin",
        location: "Valais",
        price: 120,
        image: "/valais.jpg",
      }
    ]
  },
  {
    title: "Mer",
    properties: [
      {
        id: 13,
        title: "Appartement vue mer",
        location: "Nice",
        price: 150,
        image: "/nice.jpg",
      },
      {
        id: 14,
        title: "Villa avec piscine",
        location: "Saint-Tropez",
        price: 280,
        image: "/saint-tropez.jpg",
      }
    ]
  },
  {
    title: "Touristique",
    properties: [
      {
        id: 15,
        title: "Château de charme",
        location: "Loire",
        price: 220,
        image: "/loire.jpg",
      },
      {
        id: 16,
        title: "Villa historique",
        location: "Sète",
        price: 180,
        image: "/sète.jpg",
      }
    ]
  },
  {
    title: "Forêt",
    properties: [
      {
        id: 17,
        title: "Gîte en forêt",
        location: "Vosges",
        price: 90,
        image: "/vosges.jpg",
      },
      {
        id: 18,
        title: "Cabane au coeur de la nature",
        location: "Alpes",
        price: 100,
        image: "/alpes.jpg",
      }
    ]
  },
  {
    title: "Urbain",
    properties: [
      {
        id: 19,
        title: "Studio en ville",
        location: "Paris",
        price: 100,
        image: "/paris.jpg",
      },
      {
        id: 20,
        title: "Appartement moderne",
        location: "Lyon",
        price: 110,
        image: "/lyon.jpg",
      }
    ]
  },
  {
    title: "Luxe",
    properties: [
      {
        id: 21,
        title: "Villa de luxe",
        location: "Saint-Tropez",
        price: 400,
        image: "/saint-tropez.jpg",
      },
      {
        id: 22,
        title: "Appartement haut de gamme",
        location: "Paris",
        price: 350,
        image: "/paris2.jpg",
      }
    ]
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredSections = 
    selectedCategory === "Tous" 
      ? homeSections 
      : homeSections.filter(section => section.title === selectedCategory);


  return (
    <div className="home-page">
      <section className="home-filters">
        <CategoryFilter 
        selected={selectedCategory} onSelect={setSelectedCategory} />
      </section>

      {filteredSections.map((section) => (
        <section key={section.title} className="home-section">
          <h2 className="section-title">{section.title}</h2>

          <div className="properties-grid">
            {section.properties.map((p) => (
              <PropertyCard
                key={p.id}
                title={p.title}
                location={p.location}
                price={p.price}
                image={p.image}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}