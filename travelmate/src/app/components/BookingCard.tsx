export default function BookingCard({ booking }: any) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <p>Booking ID: {booking.id}</p>
      <p>Status: {booking.status}</p>

      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Cancel Booking
      </button>
    </div>
  );
}
