import { useParams } from "react-router-dom"
import "./Notice.css"

export default function Notice() {
    const { id } = useParams();

    return (
        <div className="notice-page">
            <h1 className="page-title">Annonces {id}</h1>

            <section className="notice-gallary">
                Photos du logement
            </section>

            <section className="notice-section">
                <h2>Détails du logement</h2>
                <p>Description, équipements, règles...</p>
            </section>

            <section className="notice-section">
                <h2>Avis & notes</h2>
                <p>Liste des avis utilisateurs</p>
            </section>
        </div>
    )
}