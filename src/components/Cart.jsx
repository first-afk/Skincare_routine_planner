import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { PaystackButton } from "react-paystack";
import { Toaster, toast } from "sonner";

const Cart = () => {
  const { cartItems, clearCart, removeItem, addToCart, decrementQuantity } =
    useCart();
  // const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartContent, setCartContent] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartContent(true);
    } else {
      setCartContent(false);
    }
  }, [cartItems.length]);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.price) * item.quantity;
    });
    setTotal(total);
  }, [cartItems]);

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const email = "oriejiestherr@gmail.com";

  const paystackConfig = {
    email: email,
    amount: total * 100,
    currency: "NGN",
    publicKey: publicKey,
    onSuccess: (response) => {
      console.log("payment successful", response);
      toast.success("Payment successful");
      clearCart();
      setCartContent(false);
      setTotal(0);
    },
    onClose: () => {
      toast.error("Payment window closed");
    },
    onError: () => {
      toast.error("Payment failed");
    },
  };

  return (
    <>
      <Toaster />
      <div className="p-5 mb-5 border-b-2 border-[#363636]">
        <h1 className="text-4xl font-bold capitalize">
          your Cart ({cartItems.length})
        </h1>
      </div>
      {cartContent ? (
        <div className="h-[60vh] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="border-b-2 border-[#363636] p-5">
              <div>
                <h2 className="uppercase">{item.name}</h2>
                <p>${item.price * item.quantity}</p>
              </div>
              <p>size: </p>
              <div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decrementQuantity(item)}
                    className="px-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="px-2">
                    +
                  </button>
                </div>
                <button className="uppercase text-xs bg-gray-300 p-2" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="capitalize">
          <h1>Cart is empty</h1>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="absolute bottom-0 w-full p-5 ">
          <div className="border-b-2 border-[#363636] p-5">
            <p>Total: ${total}</p>
          </div>
          <div>
            <PaystackButton
              {...paystackConfig}
              text="checkout"
              className={{
                padding: "10px",
                background: ["#363636"],
                color: "white",
                border: "none",
                cursor: "pointer",
                text: "uppercase",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
