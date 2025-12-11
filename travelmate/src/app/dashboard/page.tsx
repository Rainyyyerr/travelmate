import bookings from "../lib/dummyData";
import BookingCard from "../components/BookingCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>

      <div className="space-y-4">
        {bookings.slice(0, 2).map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}
