import crossIcon from '../../assets/icons/cross-icon.svg';
import { setIsCartOpen } from '../../features/cart/cartSlice';
import { useDispatch } from "react-redux";


export default function OrderHeader() {
    const dispatch = useDispatch();

    return (
        <div className="modal__header">
            <button type="button" className="modal__close" onClick={() => {dispatch(setIsCartOpen(false))}}>
                <img src={crossIcon} alt="close-icon" />
            </button>
            <h3 className="modal__title">Your order</h3>
        </div>
    );
}