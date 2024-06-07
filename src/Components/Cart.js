import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Actions/CartActions';

const Cart = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const groupedItems = items.reduce((acc, item) => {
    const existingItem = acc.find((groupedItem) => groupedItem.id === item.id);
    if (existingItem) {
      existingItem.count++;
    } else {
      acc.push({ ...item, count: 1 });
    }
    return acc;
  }, []);

  const totalAmount = groupedItems.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {groupedItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {groupedItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ₹{item.price}</p>
                    <p>Count: {item.count}</p>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
