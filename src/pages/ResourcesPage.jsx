import React from "react";
import Resources from "../components/sections/Resources";
import facilityImage from "../assets/img3.png";

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      <div className="resources-hero">
        <img 
          src={facilityImage} 
          alt="Paalam School modern facilities including well-equipped classrooms, science labs, library, and sports amenities" 
          className="resources-banner"
          loading="eager"
        />
      </div>
      <Resources />
    </div>
  );
}