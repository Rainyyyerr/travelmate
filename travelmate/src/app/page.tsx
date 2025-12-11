export default function Home() {
  return (
    <div className="flex flex-col items-center mt-24">
      <h2 className="text-4xl font-semibold mb-4">TravelMate ✈️</h2>

      <p className="text-lg text-gray-700 mb-6">
        Book international flights quickly and easily.
      </p>

      <a
        href="/flights"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Search Flights
      </a>
    </div>
  );
}
