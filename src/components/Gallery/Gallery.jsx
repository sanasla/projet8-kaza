import "./gallery.css";
import Card from "../Card/Card";
import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Fetch gallery data/properties from the API to create the cards
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setGallery(data))
      .catch((error) => console.error("Error fetching the gallery:", error));
  }, []);

  return (
    <div className="gallery-container">
      <div className="cards">
      {gallery.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          title={data.title}
          cover={data.cover}
        />
      ))}
      </div>
    </div>
  );
}
