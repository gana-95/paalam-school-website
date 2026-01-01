import React from "react";

export default function Resources() {
  return (
    <section id="resources" className="resources" aria-labelledby="resources-title">
      <div className="admissions">
        <h2 id="admissions-title">Admissions</h2>
        <div className="admission-info">
          <p>Admissions are open throughout the year for all classes in line with government regulations.</p>
          <p>No entrance exam or recommendation required.</p>
          
          <h3>How to Apply</h3>
          <p>Applications may be submitted in person at the school office only.</p>
          
          <h3>Required Documents</h3>
          <ul>
            <li>Birth certificate</li>
            <li>Passport-size photo</li>
            <li>Photo copy of Aadhar</li>
            <li>Community certificate</li>
            <li>Nativity certificate</li>
            <li>Income certificate</li>
          </ul>
          <p>Note: Admissions are granted based on seat availability.</p>
        </div>
      </div>

      <div className="administration">
        <h2 id="administration-title">Administration</h2>
        <div className="admin-info">
          <h3>Leadership Oversight</h3>
          <p>
            The president, secretary, treasurer and committee members are actively engaged 
            in monitoring the school's academic progress and the implementation of curricular 
            and co-curricular activities.
          </p>

          <h3>Academic Leadership</h3>
          <p>
            To uphold academic excellence, academic in-charges are designated for each subject area. 
            They work collaboratively with Principal to execute meticulously crafted academic plans 
            and periodic evaluations are made.
          </p>
        </div>
      </div>
    </section>
  );
}
