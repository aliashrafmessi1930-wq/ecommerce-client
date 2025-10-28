import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">✅ Payment Successful!</h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your order has been successfully processed.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Success;
