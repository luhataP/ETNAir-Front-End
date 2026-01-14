import "./Help.css"

export default function Help () {
    return (
        <div className="help-page">
            <h1 className="page-title">Assistance</h1>

            <section className="help-section">
                <h2>Réservation</h2>
                <p>Comment réserver un logement sur ETNAir.</p>
            </section>

            <section className="help-section">
                <h2>Sécurité & assurance</h2>
                <p>Vos paiements et séjours sont sécurisés.</p>
            </section>

            <section className="help-section">
                <h2>Support client</h2>
                <p>Contacter notre équipe 24/7.</p>
            </section>


            <section className="help-section">
                <h2>FAQ</h2>
                <p>Questions fréquemment posées.</p>
            </section>
        </div>
    );
}