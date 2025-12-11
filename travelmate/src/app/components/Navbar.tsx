export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">TravelMate ✈️</h1>

      <div className="flex gap-6 text-lg">
        <a href="/flights">Flights</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
