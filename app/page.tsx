export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>🍔 Ramsave</h1>
      <p>Réduisez le gaspillage alimentaire en Algérie 🇩🇿</p>

      <div style={{
        background: "#222",
        padding: "15px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <h3>🥐 Offre du jour</h3>
        <p>Boulangerie -50% sur les invendus</p>

        <button
          style={{
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Réserver
        </button>
      </div>
    </main>
  );
}
