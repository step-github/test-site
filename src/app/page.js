"use client";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#f8f8f8",
        overflow: "hidden", // Prevent any overflow
      }}
    >
      {/* Banner Section */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh", // Cover the full viewport height
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bergue-1b641.appspot.com/o/SUAVE-landingpage_da342795-ffc9-458c-b27a-cd21ad79a6.webp?alt=media&token=207a4b81-baa7-4f6e-a556-49ba3fd41c93"
          alt="Jewelry Store Banner"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the entire container
            objectPosition: "center", // Centers the image
          }}
        />
      </div>

      {/* Welcome Section */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>
          Welcome to Our Jewelry Store
        </h1>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          Discover our exquisite collection of handcrafted jewelry.
        </p>
        <button
          style={{
            backgroundColor: "#d4af37",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => alert("Explore Collection")}
        >
          Explore Collection
        </button>
      </div>
    </div>
  );
}
