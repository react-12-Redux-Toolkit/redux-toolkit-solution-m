import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/store';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const productsTotalCount = useSelector(
    (state) => state.productsInCart.totalQuantity
  );

  return (
    <button
      className={classes.button}
      onClick={() => dispatch(cartActions.toggle())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{productsTotalCount}</span>
    </button>
  );
};

export default CartButton;
