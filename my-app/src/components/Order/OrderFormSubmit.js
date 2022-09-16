import { useSelector } from "react-redux";
import {countTotalPrice } from '../../functions';

export default function OrderFormSubmit({ loading }) {
    const cart = useSelector((state) => state.cart.data);

    return (
        <div className="cart-buttons">
            <div className="cart-buttons__buttons btn-group" >
                <div className="cart-buttons__info">
                    <span className="cart-buttons__info-text">total</span>
                    <span className="cart-buttons__info-price">{'€'+ countTotalPrice(cart)}</span>
                </div>
                <button
                    type="submit"
                    className={`cart-buttons__button btn-group__button button ${loading ? "is-loading" : ""}`}
                    >
                    order
                </button>
            </div>
        </div>
    );
}