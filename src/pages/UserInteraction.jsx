import "./UserInteraction.css";

export default function UserInteraction() {
  return (
    <div className="interaction-page">
      <h1 className="page-title">Interactions</h1>
      <p className="page-subtitle">
        Messagerie, avis, documents et litiges.
      </p>

      <section className="interaction-grid">
        <div className="interaction-card">
          <h3>Messagerie</h3>
          <p>Échangez avec vos hôtes ou locataires.</p>
        </div>

        <div className="interaction-card">
          <h3>Avis & notes</h3>
          <p>Consultez et laissez des avis.</p>
        </div>

        <div className="interaction-card">
          <h3>Documents</h3>
          <p>Factures, contrats, attestations.</p>
        </div>

        <div className="interaction-card warning">
          <h3>Litiges</h3>
          <p>Signaler un problème ou conflit.</p>
        </div>
      </section>
    </div>
  );
}
