import React from "react";
import Calendar from "../components/ui/Calendar";

export default function Events() {
  return (
    <div className="page-container">
      <h1>Events & Calendar</h1>
      <p>Upcoming events and school calendar...</p>
      <Calendar startYear={2000} endYear={2026} />
    </div>
  );
}
