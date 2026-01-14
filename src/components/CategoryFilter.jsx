import "./CategoryFilter.css"

export default function CategoryFilter({selected, onSelect}) {
    const categories = ["Campagne", "Montagne", "Mer", "Touristique", "Forêt", "Urbain", "Luxe"];

    return (
        <div className="category-filter">
            {categories.map((cat) => (
               <button key={cat} className="category-button ${selected === cat ? 'selected' : ''}" onClick={() => onSelect(cat)}>
                {cat}
               </button>
            ))}
        </div>
    );
}