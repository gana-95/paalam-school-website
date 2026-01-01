import React from "react";

export default function Badge({ children, variant = "default", className = "" }) {
  const variantClasses = {
    default: "badge-default",
    event: "badge-event",
    news: "badge-news"
  };

  return (
    <span className={`badge ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
