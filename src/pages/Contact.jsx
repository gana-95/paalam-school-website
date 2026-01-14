import React from "react";

export default function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <section>
        <h2>Map</h2>
        <div className="map-wrapper">
          <iframe
            title="Paalam School location"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              'Victorian View, Layout, Borewell Rd, Palm Meadows, Nallurhalli, Whitefield, Bengaluru, Karnataka 560066'
            )}&output=embed`}
          />

          <p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                'Victorian View, Layout, Borewell Rd, Palm Meadows, Nallurhalli, Whitefield, Bengaluru, Karnataka 560066'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open this location in Google Maps
            </a>
          </p>
        </div>
      </section>
      <section>
        <h2>Contact Info</h2>
        <p>Phone: ...</p>
        <p>Email: ...</p>
      </section>
      <section>
        <h2>Office Hours</h2>
        <p>Details about office hours...</p>
      </section>
    </div>
  );
}
