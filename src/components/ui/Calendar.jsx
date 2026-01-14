import React, { useEffect, useState } from 'react';
import './Calendar.css';

function monthName(monthIndex) {
  return new Date(2020, monthIndex, 1).toLocaleString(undefined, { month: 'long' });
}

export default function Calendar({ startYear = 2000, endYear = 2026 }) {
  const now = new Date();
  const [today, setToday] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [events, setEvents] = useState(() => {
    try {
      const raw = localStorage.getItem('calendarEvents');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  });
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('calendarEvents', JSON.stringify(events));
    } catch (e) {}
  }, [events]);

  useEffect(() => {
    // keep `today` updated in case user keeps app open across midnight
    const t = setInterval(() => {
      const n = new Date();
      setToday(new Date(n.getFullYear(), n.getMonth(), n.getDate()));
    }, 60_000);
    return () => clearInterval(t);
  }, []);

  function setView(y, m) {
    // clamp within allowed range
    if (y < startYear) {
      y = startYear; m = 0;
    }
    if (y > endYear) {
      y = endYear; m = 11;
    }
    setViewYear(y);
    setViewMonth(m);
  }

  function goPrev() {
    let y = viewYear;
    let m = viewMonth - 1;
    if (m < 0) { m = 11; y -= 1; }
    setView(y, m);
  }

  function goNext() {
    let y = viewYear;
    let m = viewMonth + 1;
    if (m > 11) { m = 0; y += 1; }
    setView(y, m);
  }

  // build month grid
  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const firstWeekday = firstOfMonth.getDay(); // 0=Sun
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const weeks = [];
  let day = 1 - firstWeekday;
  while (day <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++, day++) {
      if (day < 1 || day > daysInMonth) {
        week.push(null);
      } else {
        week.push(new Date(viewYear, viewMonth, day));
      }
    }
    weeks.push(week);
  }

  const years = [];
  for (let y = startYear; y <= endYear; y++) years.push(y);

  return (
    <div className="calendar-root">
      <div className="calendar-header">
        <button onClick={goPrev} aria-label="Previous month" disabled={viewYear === startYear && viewMonth === 0}>‹</button>
        <div className="calendar-title">
          <span className="month">{monthName(viewMonth)}</span>
          <select className="year-select" value={viewYear} onChange={(e) => setView(Number(e.target.value), viewMonth)}>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <button onClick={goNext} aria-label="Next month" disabled={viewYear === endYear && viewMonth === 11}>›</button>
      </div>

      <div className="calendar-grid">
        <div className="weekday">Sun</div>
        <div className="weekday">Mon</div>
        <div className="weekday">Tue</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thu</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>

        {weeks.map((week, wi) => (
          week.map((d, di) => {
            if (!d) return <div key={`${wi}-${di}`} className="day empty" />;
            const isToday = d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
            const key = d.toISOString().slice(0,10);
            const dayEvents = events[key] || [];
            return (
              <button
                key={`${wi}-${di}`}
                className={isToday ? 'day today' : 'day'}
                aria-current={isToday ? 'date' : undefined}
                onClick={() => setSelectedDate(d)}
                title={dayEvents.length ? `${dayEvents.length} event(s)` : ''}
              >
                {d.getDate()}
                {dayEvents.length > 0 && <span className="marker" aria-hidden />}
              </button>
            );
          })
        ))}
      </div>

      <div className="calendar-footer">
        <small>Showing years {startYear}—{endYear}. Current date: {today.toDateString()}</small>
      </div>

      <div className="event-panel">
        {selectedDate ? (
          <div>
            <h3>Events for {selectedDate.toDateString()}</h3>
            <EventList
              date={selectedDate}
              events={(events[selectedDate.toISOString().slice(0,10)] || [])}
              onAdd={(title) => {
                const key = selectedDate.toISOString().slice(0,10);
                const next = { ...events };
                if (!next[key]) next[key] = [];
                next[key].push({ title, createdAt: new Date().toISOString() });
                setEvents(next);
              }}
              onRemove={(idx) => {
                const key = selectedDate.toISOString().slice(0,10);
                const next = { ...events };
                if (!next[key]) return;
                next[key].splice(idx,1);
                if (!next[key].length) delete next[key];
                setEvents(next);
              }}
            />
          </div>
        ) : (
          <div>
            <h3>Select a date to view or add events</h3>
            <p>Click any day to manage events for that date.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function EventList({ date, events, onAdd, onRemove }){
  const [text, setText] = useState('');
  return (
    <div className="event-list">
      <ul>
        {events.map((e, i) => (
          <li key={i}>
            <span className="evt-title">{e.title}</span>
            <button className="evt-remove" onClick={() => onRemove(i)} aria-label="Remove event">✕</button>
          </li>
        ))}
      </ul>
      <div className="event-add">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New event title" />
        <button onClick={() => { if (text.trim()) { onAdd(text.trim()); setText(''); } }}>Add</button>
      </div>
    </div>
  );
}
