import React from "react";

export default function Resources() {
  const resources = [
    { title: "Academic Calendar", href: "#" },
    { title: "Admission Guidelines", href: "#" },
    { title: "Support Our Mission", href: "#" }
  ];

  return (
    <section id="resources" className="resources" aria-labelledby="resources-title">
      <h2 id="resources-title">Resources</h2>
      <ul>
        {resources.map(r => (
          <li key={r.title}><a href={r.href}>{r.title}</a></li>
        ))}
      </ul>
    </section>
  );
}
