import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-logo">ETNAir</h1>
            <nav className="header-nav">
                <Link to="/">Accueil</Link>
                <Link to="/reservation">Réservations</Link>
                <Link to="/destinations">Destinations</Link>
                <Link to="/host">Hôtes</Link>
                <Link to="/interactions">Intéractions</Link>
                <Link to="/notice">Annonces</Link>
                <Link to="/help">Aide</Link>
                <Link to="/login">Connexion</Link>
            </nav>
            <SearchBar />
            <div className="header-actions">
                <a href="/login" className="login-btn">Profil</a>
                <button className="px-3 py-1 bg-gray-100 rounded-full">Paramètres</button>
            </div>
        </header>
    )
}