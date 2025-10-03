import React from "react";
import profileImage from "../assets/img2.png";

export default function Mission() {
  return (
    <section id="mission" className="mission" aria-labelledby="mission-title">
      <div className="vision-mission">
        <div className="mission-content">
          <h2 id="mission-title">Our Mission</h2>
          <p>
            Our mission is to intentionally design an environment to provide immersive learning experience, 
            to view learning as a reconstruction rather than as a transmission of knowledge, learner driven pedagogy, 
            have teachers as facilitators supporting students in their explorations, to empower our students become 
            self-directed, independent and inter disciplinary curriculum with meaningful integration of technology.
          </p>
        </div>
        
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a leading institution where students grow into responsible 
            global citizens who contribute positively to society.
          </p>
        </div>

        <div className="profile-content">
          <div className="profile-image-container">
            <img src={profileImage} alt="School Activities" className="profile-image" />
          </div>
          <div className="profile-text">
            <h2>Our Profile</h2>
            <p>
              Paalam matriculation higher secondary school was started in the year 2006 by the PAALAM EDUCATIONAL TRUST, 
              THEYPAA ARAKATTALAI, which was formed in the year 2003 with the register number 154/2003. Contributing 
              members are from various professions like IAS, DOCTORS, ENGINEERS, NRIs, BUSINESS ENTREPRENEURS & EDUCATIONALISTS.
            </p>
            <p>
              Theni Paalam has a futuristic approach in its dissemination of education and follows a multi-pronged procedure. 
              The underlying belief is that holistic form of learning, and not just academics will ensure the overall 
              personality development of each of its students each one a unique creation.
            </p>
          </div>
        </div>

        <div className="dictum-content">
          <h2>Our Dictum</h2>
          <p>
            "PARENTS ARE THE FIRST TEACHERS AND TEACHERS ARE THE SECOND PARENTS". The school is an integrated 
            community of parents, teachers and children, we respect, celebrate and understand the difference 
            in our school as we truly represent the cultural mosaic of our country.
          </p>
        </div>
      </div>
    </section>
  );
}
