"use client";

import { useMemo, useState } from "react";

const dayFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "short",
});

function toDateKey(dateString) {
  return new Date(`${dateString}T12:00:00`).toISOString().slice(0, 10);
}

function buildCalendarDays(viewDate) {
  const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const lastDay = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const slots = [];
  for (let i = 0; i < firstWeekday; i += 1) slots.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    slots.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), day));
  }
  return slots;
}

export default function EventCalendar({ events }) {
  const firstEventDate = events[0] ? new Date(`${events[0].date}T12:00:00`) : new Date();
  const [viewDate, setViewDate] = useState(new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(events[0]?.date ?? null);

  const eventMap = useMemo(() => {
    const map = new Map();
    events.forEach((event) => {
      const key = toDateKey(event.date);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(event);
    });
    return map;
  }, [events]);

  const calendarDays = useMemo(() => buildCalendarDays(viewDate), [viewDate]);
  const visibleEvents = selectedDate ? eventMap.get(toDateKey(selectedDate)) ?? [] : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-forest-950">
            {viewDate.toLocaleString("en-GB", { month: "long", year: "numeric" })}
          </h3>
          <div className="flex gap-2">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
            >
              Prev
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
            >
              Next
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-wider text-forest-600">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-7 gap-2">
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="h-12 rounded-lg bg-paper-100/70" />;
            }
            const dateKey = toDateKey(date.toISOString().slice(0, 10));
            const hasEvent = eventMap.has(dateKey);
            const isSelected = selectedDate === dateKey;

            return (
              <button
                key={dateKey}
                type="button"
                onClick={() => setSelectedDate(dateKey)}
                className={`relative h-12 rounded-lg border text-sm transition ${
                  isSelected
                    ? "border-moss-500 bg-moss-100 text-forest-950"
                    : "border-paper-200 bg-paper-50 text-forest-800 hover:bg-paper-100"
                }`}
              >
                {date.getDate()}
                {hasEvent ? <span className="absolute right-1.5 bottom-1.5 h-2 w-2 rounded-full bg-sun-500" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold text-forest-950">Selected Date</h3>
        {selectedDate ? (
          <p className="mt-1 text-sm text-forest-700">{dayFormatter.format(new Date(`${selectedDate}T12:00:00`))}</p>
        ) : (
          <p className="mt-1 text-sm text-forest-700">Choose a day to view details.</p>
        )}

        <div className="mt-4 space-y-3">
          {visibleEvents.length > 0 ? (
            visibleEvents.map((event) => (
              <article key={event.id} className="rounded-xl border border-paper-200 bg-paper-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-forest-600">{event.type}</p>
                <h4 className="mt-1 text-sm font-semibold text-forest-950">{event.title}</h4>
                <p className="mt-1 text-xs text-forest-700">{event.time}</p>
                <p className="text-xs text-forest-700">Age: {event.age}</p>
                <p className="text-xs text-forest-700">GBP {event.price} per child</p>
              </article>
            ))
          ) : (
            <p className="text-sm text-forest-700">No published events on this date yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
