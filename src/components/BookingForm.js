"use client";

import { useMemo, useState } from "react";
import { events, paymentPrograms } from "@/data/siteData";

export default function BookingForm() {
  const [programKey, setProgramKey] = useState(paymentPrograms[0].key);
  const [quantity, setQuantity] = useState(1);
  const [eventId, setEventId] = useState(events[0]?.id ?? "");
  const [supportAmount, setSupportAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [submitted, setSubmitted] = useState(null);

  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const selectedProgram = useMemo(
    () => paymentPrograms.find((program) => program.key === programKey) ?? paymentPrograms[0],
    [programKey]
  );

  const subtotal = selectedProgram.price * quantity;
  const total = subtotal + Number(supportAmount || 0);

  const selectedEvent = events.find((event) => event.id === eventId);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted({
      ...form,
      programKey,
      programName: selectedProgram.name,
      eventId,
      eventTitle: selectedEvent?.title ?? null,
      quantity,
      supportAmount: Number(supportAmount || 0),
      paymentMethod,
      subtotal,
      total,
      submittedAt: new Date().toISOString(),
    });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
      <form onSubmit={handleSubmit} className="card space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-forest-950">Book and Pay</h2>
          <p className="mt-1 text-sm text-forest-700">
            Frontend checkout is ready. Connect your preferred backend/processor later (for example Stripe, GoCardless, or bank transfer workflow).
          </p>
        </div>

        <label className="field">
          <span>Program</span>
          <select value={programKey} onChange={(event) => setProgramKey(event.target.value)} className="input">
            {paymentPrograms.map((program) => (
              <option value={program.key} key={program.key}>
                {program.name} - GBP {program.price}
              </option>
            ))}
          </select>
          <small>{selectedProgram.description}</small>
        </label>

        <label className="field">
          <span>Event date (optional for now)</span>
          <select value={eventId} onChange={(event) => setEventId(event.target.value)} className="input">
            {events.map((eventItem) => (
              <option key={eventItem.id} value={eventItem.id}>
                {eventItem.date} - {eventItem.title}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="field">
            <span>Parent or guardian name</span>
            <input
              type="text"
              required
              className="input"
              value={form.parentName}
              onChange={(event) => setForm((current) => ({ ...current, parentName: event.target.value }))}
            />
          </label>

          <label className="field">
            <span>Child name</span>
            <input
              type="text"
              required
              className="input"
              value={form.childName}
              onChange={(event) => setForm((current) => ({ ...current, childName: event.target.value }))}
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              required
              className="input"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            />
          </label>

          <label className="field">
            <span>Phone</span>
            <input
              type="tel"
              required
              className="input"
              value={form.phone}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="field">
            <span>Number of children</span>
            <input
              type="number"
              min="1"
              max="8"
              className="input"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value || 1))}
            />
          </label>

          <label className="field">
            <span>Optional supporter contribution (GBP)</span>
            <input
              type="number"
              min="0"
              step="1"
              className="input"
              value={supportAmount}
              onChange={(event) => setSupportAmount(Number(event.target.value || 0))}
            />
          </label>
        </div>

        <label className="field">
          <span>Notes</span>
          <textarea
            className="input min-h-28"
            value={form.notes}
            onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
            placeholder="Allergies, access needs, or anything we should know"
          />
        </label>

        <fieldset className="field">
          <span>Preferred payment method</span>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {[
              { key: "card", label: "Card" },
              { key: "bank-transfer", label: "Bank transfer" },
              { key: "invoice", label: "Invoice" },
            ].map((method) => (
              <label key={method.key} className="flex items-center gap-2 rounded-lg border border-paper-300 bg-paper-50 px-3 py-2 text-sm">
                <input
                  type="radio"
                  checked={paymentMethod === method.key}
                  onChange={() => setPaymentMethod(method.key)}
                />
                {method.label}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="btn-primary w-full justify-center">
          Continue to payment backend
        </button>
      </form>

      <aside className="card h-fit">
        <h3 className="text-lg font-semibold text-forest-950">Order Summary</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-forest-700">Program</dt>
            <dd className="text-right font-medium text-forest-950">{selectedProgram.name}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-forest-700">Quantity</dt>
            <dd className="font-medium text-forest-950">{quantity}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-forest-700">Session subtotal</dt>
            <dd className="font-medium text-forest-950">GBP {subtotal.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-forest-700">Supporter add-on</dt>
            <dd className="font-medium text-forest-950">GBP {Number(supportAmount || 0).toFixed(2)}</dd>
          </div>
          <div className="border-t border-paper-300 pt-3">
            <div className="flex justify-between gap-3">
              <dt className="text-base font-semibold text-forest-950">Total</dt>
              <dd className="text-base font-semibold text-forest-950">GBP {total.toFixed(2)}</dd>
            </div>
          </div>
        </dl>

        {submitted ? (
          <div className="mt-6 rounded-xl border border-moss-400/50 bg-moss-50 p-4">
            <p className="text-sm font-semibold text-forest-950">Frontend payload ready</p>
            <p className="mt-1 text-xs text-forest-700">
              Connect this payload to your backend endpoint when you are ready.
            </p>
            <pre className="mt-3 max-h-56 overflow-auto rounded-lg bg-forest-950 p-3 text-[11px] text-paper-100">
              {JSON.stringify(submitted, null, 2)}
            </pre>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
