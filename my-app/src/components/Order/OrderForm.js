import OrderFormSubmit from './OrderFormSubmit';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen, clearCart, setIsOrderPlaced } from '../../features/cart/cartSlice'
import { createOrder } from '../../functions'
import { api } from '../../api';

export default function OrderForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.data);

    const setOrder = (order) => async (dispatch) => {
        setLoading(true);
        try {
            await api.setOrder(order);
            dispatch(clearCart([]));
            dispatch(setIsCartOpen(false))
            dispatch(setIsOrderPlaced(true));
        } catch (error) {
            dispatch(setError(error.message));
        }
            setLoading(false);
        };

        if (error) {
            return <div className="error"> {error}</div>;
        }

    return (
        <form 
        className="cart-form"
        onSubmit= {(e) => {
            e.preventDefault();
            const order = createOrder(cart, name, email, tel, address);
            dispatch(setOrder(order));
        }}
        >
            <h5 className="cart-form__title">Delivery</h5>
            <div className="cart-form__group cart-form__group_row">
                <input
                    type="text"
                    className="cart-form__input"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="cart-form__input"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    className="cart-form__input"
                    placeholder="Phone"
                    required
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
            </div>
            <div className="cart-form__group">
                <input
                    type="text"
                    className="cart-form__input"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <OrderFormSubmit name={name} email={email} tel={tel} address={address} loading={loading}/>
        </form>

    );
}