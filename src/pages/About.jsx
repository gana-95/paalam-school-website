import React from "react";
import Mission from "../components/sections/Mission";

export default function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <Mission />
      
      <section className="administration-content">
        <h2>Administration & Leadership</h2>
        <p>
          <strong>Leadership oversight;</strong> The president, secretary, treasurer and committee
          members are actively engaged in monitoring the school’s academic progress
          and the implementation of curricular and co- curricular activities.
        </p>
        <p>
          <strong>Academic leadership :</strong> to uphold academic excellence, academic in charges are
          designated for each subject area. They work collaboratively with Principal to
          execute meticulously crafted academic plans and periodic evaluations are made.
        </p>
      </section>

      <section className="infrastructure">
        <h2>Infrastructure</h2>
        <p>Details about the school infrastructure (Labs, Library, Playground, etc.) will be added here.</p>
      </section>
    </div>
  );
}
