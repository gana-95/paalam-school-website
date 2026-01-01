import React from "react";

export default function Card({ children, className = "", hover = false }) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
}
