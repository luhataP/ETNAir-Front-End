export default function HostPage () {
  return (
    <div className="host-page">
      <h1 className="page-title">Interactions</h1>
      <p className="page-subtitle">
        Messagerie, avis, documents et litiges.
      </p>

      <section className="host-actions">
        <div className="host-card">
          <h3>Ajouter un logement</h3>
          <p>Créez et gérez vos annonces de logement.</p>
        </div>

        <div className="host-card">
          <h3>Mes annonces</h3>
          <p>Gérez vos annonces de logement.</p>
        </div>

        <div className="host-card">
          <h3>Réservations</h3>
          <p>Gérez vos réservations.</p>
        </div>
      </section>
    </div>
  );
}