import { useDispatch } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartHangle = () => {
    dispatch(uiAction.toggleCarte());
  };

  return (
    <button className={classes.button} onClick={toggleCartHangle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
