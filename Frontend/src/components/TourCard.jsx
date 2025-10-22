import React from 'react';
import './styles/TourCard.css';

export default function TourCard({ image, title, description, onClick }) {
  return (
    <button className="tour-card" onClick={onClick}>
      <img src={image} alt={title} className="tour-card-image" />
      <h3 className="tour-card-title">{title}</h3>
      <p className="tour-card-description">{description}</p>
    </button>
  );
}
