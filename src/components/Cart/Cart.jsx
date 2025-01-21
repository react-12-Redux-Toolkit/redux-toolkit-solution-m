import { useSelector } from 'react-redux';
import Card from '../UI';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const isVisible = useSelector((state) => state.cartToggle.cartIsVisible);
  const cartItems = useSelector((state) => state.productsInCart.items);

  if (!isVisible) {
    return null;
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.map((cartItem) => (
        <ul key={cartItem.id}>
          <CartItem
            id={cartItem.id}
            title={cartItem.title}
            total={cartItem.totalPrice}
            price={cartItem.price}
            quantity={cartItem.quantity}
          />
        </ul>
      ))}
    </Card>
  );
};

export default Cart;
