import { Minus, Plus, Trash2 } from "lucide-react";
import { Product } from "../types/types";

interface CartProps {
  cartList: Product[];
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const Cart = ({
  cartList,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}: CartProps) => {
  const totalPrice = cartList
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      {cartList.length === 0 ? (
        <div className="text-center py-16">
          <div className="mb-4">
            <Trash2 className="mx-auto h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-gray-500">
            Add some products to your cart to see them here.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Cart items */}
          <div className="space-y-4">
            {cartList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              >
                {/* Product image placeholder */}
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-gray-400"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">
                      Product ID: {item.id}
                    </p>
                  </div>
                </div>

                {/* Price and actions */}
                <div className="flex items-center justify-between w-full sm:w-auto space-x-6">
                  <span className="font-medium">
                    ${item.price * item.quantity}
                  </span>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center justify-center h-8 w-8 rounded-md text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 my-4 pt-4 flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">${totalPrice}</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition-colors">
              Checkout but for now it is disabled
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
