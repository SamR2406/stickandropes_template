import BookingForm from "@/components/BookingForm";
import HeroBanner from "@/components/HeroBanner";
import { imageBank } from "@/data/siteData";

export const metadata = {
  title: "Payments | Sticks and Ropes",
  description: "Frontend booking and payment flow ready for backend integration.",
};

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.paymentsHero}
        eyebrow="Payments"
        title="Frontend checkout ready for backend integration"
        body="Choose a program, select session details, and capture booking information. You can connect this to your preferred payment backend when ready."
      />

      <section className="section-shell">
        <BookingForm />
      </section>
    </div>
  );
}
