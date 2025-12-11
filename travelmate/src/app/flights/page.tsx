import flights from "../lib/dummyData";
import FlightCard from "../components/FlightCard";

export default function Flights() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Flights</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}
