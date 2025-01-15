"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f8f8f8",
      }}
    >
      {/* Banner Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "50vh",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bergue-1b641.appspot.com/o/SUAVE-landingpage_da342795-ffc9-458c-b27a-cd21ad79a691.png.webp?alt=media&token=0e580982-f224-4a09-a824-8481de739dd8"
          alt="Jewelry Store Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Welcome Section */}
      <h1 style={{ fontSize: "2rem", color: "#333" }}>
        Welcome to Our Jewelry Store
      </h1>
      <p style={{ fontSize: "1rem", color: "#555", margin: "10px 0 30px" }}>
        Discover our exquisite collection of handcrafted jewelry.
      </p>

      {/* Call to Action Section */}
      <button
        style={{
          backgroundColor: "#d4af37",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => alert("Explore Collection")}
      >
        Explore Collection
      </button>
    </div>
  );
}
