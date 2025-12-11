export default function FlightCard({ flight }: any) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold">{flight.airline}</h2>
      <p>
        {flight.from} → {flight.to}
      </p>
      <p className="font-semibold">${flight.price}</p>

      <a
        href={`/flights/${flight.id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </a>
    </div>
  );
}
