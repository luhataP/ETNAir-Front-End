import "./Reservations.css"

export default function Reservation() {
    return (
        <div className="reservations-page">
            <h1 className="page-title">Vos réservations</h1>
            <p className="page_subtitle">
                Retrouvez l'historique et les séjours à venir.
            </p>

            <section className="reservations-list">
                <div className="reservation-card">
                    <img className="reservation-image" src="./vosges.jpg" alt="Cabane en forêt" />
                    <div className="reservation-info">
                        <h3>Cabane en forêt</h3>
                        <p>Vosges · 12 → 15 août</p>
                        <span className="reservation-status upcoming">À venir</span>
                    </div>
                </div>

                <div className="reservation-card">
                    <img className="reservation-image" src="https://www.tourmontparnasse56.com/wp-content/uploads/2024/03/paris-sunset-from-montparnasse-tower-1024x768.jpg" alt="Studio à Montparnasse" />
                    <div className="reservation-info">
                        <h3>Studio à Montparnasse</h3>
                        <p>Paris · 2 → 6 juillet</p>
                        <span className="reservation-status past">Terminé</span>
                    </div>
                </div>
            </section>
        </div>
    );
}