const flights = [
  { id: 1, airline: "Emirates", from: "Dubai", to: "London", price: 820 },
  { id: 2, airline: "Qatar Airways", from: "Doha", to: "New York", price: 950 },
  { id: 3, airline: "Singapore Airlines", from: "Singapore", to: "Paris", price: 780 },
];

const bookings = [
  { id: 1, flightId: 1, status: "Confirmed" },
  { id: 2, flightId: 3, status: "Cancelled" },
];

export default flights;
export { bookings };
