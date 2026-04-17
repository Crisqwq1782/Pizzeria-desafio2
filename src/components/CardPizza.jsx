// src/components/CardPizza.jsx
export default function CardPizza({ img, name, price, ingredients }) {
  return (
    <div style={{
      width: "320px",
      borderRadius: "24px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
      margin: "16px",
      display: "flex",
      flexDirection: "column"
    }}>
      <img
        src={img}
        alt={name}
        style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
      />

      <div style={{ padding: "22px 24px 18px" }}>
        <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#111" }}>{name}</h3>
        <div style={{ marginTop: "16px", padding: "16px 18px", backgroundColor: "#fafafa", borderRadius: "16px" }}>
          <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#555", letterSpacing: "0.4px" }}>
            Ingredientes:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
            {ingredients.map((ing, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", fontSize: "13px", color: "#555" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF9E1B", display: "inline-block" }} />
                {ing}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>Precio:</p>
            <p style={{ margin: "4px 0 0", fontSize: "20px", fontWeight: 700, color: "#111" }}>{price}</p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button style={{
              padding: "10px 16px",
              border: "1px solid #d1d5db",
              borderRadius: "12px",
              backgroundColor: "#fff",
              color: "#111",
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Ver Más
            </button>
            <button style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "12px",
              backgroundColor: "#111",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
