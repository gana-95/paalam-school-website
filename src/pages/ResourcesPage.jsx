import React from "react";
import Resources from "../components/Resources";
import facilityImage from "../assets/img3.png";

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      <div className="resources-hero">
        <img src={facilityImage} alt="School Facilities" className="resources-banner" />
      </div>
      <Resources />
    </div>
  );
}