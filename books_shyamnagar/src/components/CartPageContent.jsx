import React from 'react';
import { useCart } from '@/context/CartContext'; // Import useCart
import Image from 'next/image';
import Link from 'next/link';

// Cart Item Component (using context functions)
const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center justify-between border-b py-4 last:border-b-0">
      <div className="flex items-center space-x-4 flex-1 min-w-0">
        <Image 
          src={item.image || '/images/placeholder.png'} 
          alt={item.name} 
          width={64} // Use fixed width/height or aspect ratio for Image component
          height={64}
          className="object-cover rounded"
        />
        <div className="flex-1 min-w-0">
          <Link href={`/product/${item.id || 'default'}`} legacyBehavior><a>
            <h4 className="font-medium truncate hover:text-blue-600">{item.name}</h4>
          </a></Link>
          {/* Quantity Selector */}
          <div className="flex items-center mt-1">
             <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-500 mr-2">Qty:</label>
             <input 
               id={`quantity-${item.id}`}
               type="number" 
               min="1" 
               value={item.quantity} 
               onChange={handleQuantityChange} 
               className="w-16 px-2 py-0.5 border rounded text-sm"
             />
          </div>
        </div>
      </div>
      <div className="text-right ml-4">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={handleRemove} className="text-xs text-red-500 hover:text-red-700 mt-1">
          Remove
        </button>
      </div>
    </div>
  );
};

// Main Cart Page Content (using context state)
const CartPageContent = () => {
  const { cartItems, subtotal, clearCart } = useCart(); // Get state and functions from context

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout page or trigger an order process.
    // For now, it can just clear the cart and show a message.
    alert(`Proceeding to checkout with Pay on Delivery. Subtotal: $${subtotal.toFixed(2)}. Thank you!`);
    // clearCart(); // Optionally clear cart after 'checkout'
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is currently empty.</p>
          <Link href="/" legacyBehavior><a>
             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
               Continue Shopping
             </button>
          </a></Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            
            <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <button 
                onClick={clearCart} 
                className="text-sm text-gray-500 hover:text-red-600 mb-4 md:mb-0"
              >
                Clear Cart
              </button>
              <div className="text-right w-full md:w-auto">
                <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">Shipping calculated at checkout (if applicable).</p>
                <button 
                  onClick={handleCheckout}
                  className="mt-4 w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300 font-medium"
                >
                  Proceed to Checkout
                </button>
                <p className="text-xs text-gray-600 mt-2 font-semibold">Option: Pay on Delivery</p>
                <p className="text-xs text-gray-500 mt-1">Home Delivery Available</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPageContent;

