import minusIcon from '../../assets/icons/square-minus-icon.svg'
import plusIcon from '../../assets/icons/square-plus-icon.svg'
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, setShake } from '../../features/cart/cartSlice';

export default function OrderCartProduct({ title, price, img, count, product }) {
    const dispatch = useDispatch();

    return (
    <div className="cart-product">
        <div className="cart-product__img">
            <img src={require(`../../assets/products/${img}`)} alt="product" />
        </div>
        <div className="cart-product__info">
            <div className="cart-product__title">{title}</div>
            <div className="cart-product__price-wrap">
                <div className="cart-counter">
                    <button
                        type="button"
                        className="cart-counter__button cart-counter__button_minus"
                        onClick={() => {
                            dispatch(removeFromCart(product));
                            dispatch(setShake(true));
                            setTimeout(() => {
                                dispatch(setShake(false));
                            }, 500)
                        }}
                    >
                        <img
                            src={minusIcon}
                            alt="minus"
                        />
                    </button>
                    <span className="cart-counter__count">{count}</span>
                    <button
                        type="button"
                        className="cart-counter__button cart-counter__button_plus"
                        onClick={() => {
                            dispatch(addToCart(product));
                            dispatch(setShake(true));
                            setTimeout(() => {
                                dispatch(setShake(false));
                            }, 500)
                        }}
                        >
                        <img src={plusIcon} alt="plus" />
                    </button>
                </div>
                <div className="cart-product__price">{'€'+ (price*count).toFixed(2)}</div>
            </div>
        </div>
    </div>
    );
}