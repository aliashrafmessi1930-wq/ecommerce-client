import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">❌ Payment Cancelled</h1>
      <p className="text-gray-700 mb-6">
        Your payment was not completed. You can try again or return to the shop.
      </p>
      <Link
        to="/cart"
        className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Return to Cart
      </Link>
    </div>
  );
};

export default Cancel;
