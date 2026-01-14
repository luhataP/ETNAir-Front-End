import "./SearchBar.css"

export default function SearchBar() {
    return (
     <div className="searchbar-container">
        <input
        className="searchbar-input"
        placeholder="Rechercher une destination..."
        />
        <button className="searchbar-button">Rechercher</button>
     </div>
    );
}