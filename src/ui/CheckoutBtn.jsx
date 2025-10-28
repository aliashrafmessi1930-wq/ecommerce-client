import { store } from "../lib/store";
import { config } from "../config";

const CheckoutBtn = ({ products }) => {
  const { currentUser } = store();

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${config.baseUrl}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: products,
          email: currentUser?.email,
        }),
      });

      const session = await response.json();
      console.log("🔍 Stripe response:", session);

      if (!session?.url) {
        alert("❌ فشل إنشاء جلسة الدفع!");
        console.error("Checkout session error:", session);
        return;
      }

      // ✅ التوجيه مباشرة إلى Stripe Checkout Page
      console.log("🔗 Redirecting to:", session.url);
      window.location.href = session.url;

    } catch (error) {
      console.error("Checkout error:", error);
      alert("حدث خطأ أثناء تنفيذ عملية الدفع!");
    }
  };

  return (
    <div className="mt-6">
      {currentUser ? (
        <button
          onClick={handleCheckout}
          className="w-full rounded-md bg-black text-white px-4 py-3 font-semibold hover:bg-gray-800"
        >
          Checkout
        </button>
      ) : (
        <button className="w-full bg-gray-400 text-white px-4 py-3 rounded-md cursor-not-allowed">
          Login to Checkout
        </button>
      )}
    </div>
  );
};

export default CheckoutBtn;
