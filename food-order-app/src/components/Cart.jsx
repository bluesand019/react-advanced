import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting"
import Button from "../components/UI/Button"
import UserProgressContext from "../store/UserProgressContext";

const Cart = () => {
  const ctxValues = useContext(CartContext);
  const userProgessCtx = useContext(UserProgressContext)
  const cartTotal = ctxValues.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function handleCloseCart() {
    userProgessCtx.hideCart();
  }
  return (
    <Modal className="cart" open={userProgessCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {ctxValues.items.map((item) => (
          <li key={item.id}>
            {item.name}-{item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
