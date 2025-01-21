import { useDispatch } from 'react-redux';
import { productsInCartActions } from '@/store';
import Card from '../UI';
import classes from './ProductItem.module.css';

const ProductItem = ({ id, title, price, description }) => {
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={() =>
              dispatch(
                productsInCartActions.addItemToCart({
                  id,
                  title,
                  price,
                  description,
                })
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
