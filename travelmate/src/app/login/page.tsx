export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-8 mt-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form className="space-y-4">
        <input
          type="email"
          className="w-full p-3 border rounded"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full p-3 border rounded"
          placeholder="Password"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Login
        </button>
      </form>

      <p className="mt-4 text-center">
        Don't have an account? <a href="/register" className="text-blue-600">Register</a>
      </p>
    </div>
  );
}
