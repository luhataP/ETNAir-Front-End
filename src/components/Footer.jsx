import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
           © {new Date().getFullYear()} ETNAir - Tous droits réservés
        </footer>
    );
}