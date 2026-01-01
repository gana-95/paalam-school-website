import React from "react";

export default function Admissions() {
  return (
    <div className="page-container">
      <h1>Admissions</h1>
      
      <section className="admission-process">
        <h2>Admission Process</h2>
        <p>
          Admissions are open throughout the year for all classes in line with government
          regulations.
        </p>
        <p>
          <strong>No entrance exam or recommendation required.</strong>
        </p>
        <p>
          Applications may be submitted in person at the school office only.
        </p>
        <p>
          <strong>Required documents:</strong> Birth certificates, passport-size photo, photo copy of
          aadhar, community, nativity &amp; income certificates.
        </p>
        <p>
          Admissions are granted based on seat availability.
        </p>
      </section>

      <section className="fees">
        <h2>Fees</h2>
        <p>Please contact the school office for fee structure details.</p>
      </section>

      <section className="faqs">
        <h2>FAQs</h2>
        <p>Coming soon...</p>
      </section>

      <section className="enquiry">
        <h2>Enquiry Form</h2>
        <form className="enquiry-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
