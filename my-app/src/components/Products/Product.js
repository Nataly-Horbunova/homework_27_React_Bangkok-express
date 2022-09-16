import plusIcon from '../../assets/icons/plus-icon.svg'
import { useDispatch } from "react-redux";
import { addToCart, setShake } from '../../features/cart/cartSlice';

export default function Product({ title, price, img, product }) {
  const dispatch = useDispatch();

  return (
      <div className="card">
      <div className="card__top">
        <img
          src={require(`../../assets/products/${img}`)}
          className="card__image"
          alt="product"
        />
        <span className="card__price">{'€'+ price.toFixed(2)}</span>
      </div>
      <div className="card__body">
        <div className="card__title">{title}</div>
        <button 
        type="button" 
        className="card__button"
        onClick={() => {
          dispatch(addToCart(product));
          dispatch(setShake(true));
          setTimeout(() => {
              dispatch(setShake(false));
          }, 500)
        }}
        >
          <img src={plusIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
}