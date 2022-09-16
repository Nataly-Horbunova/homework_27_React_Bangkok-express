import crossIcon from '../../assets/icons/cross-icon.svg';
import { setIsOrderPlaced } from '../../features/cart/cartSlice';
import { useDispatch } from "react-redux";

export default function OrderPlaced () {
    const dispatch = useDispatch();

    return (
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__inner">
                <div className="modal__header">
                    <button 
                    type="button" 
                    className="modal__close" 
                    data-modal-close=""
                    onClick={() => {dispatch(setIsOrderPlaced(false))}} 
                    >
                        <img src={crossIcon} alt="close-icon"/>
                    </button>
                    <h3 className="modal__title">Success!</h3>
                </div>
                <div className="modal__body">
                    <div className="modal__body-inner">
                        <p>
                            {`Order successful! Your order is being cooked :)`}
                            <br></br>
                            {`We’ll notify you about delivery time shortly.`}
                            <img src={require(`../../assets/delivery.gif`)} alt="img" />
                        </p>
                    </div>
                    <div className="modal__buttons">
                        <button 
                            type="button" 
                            className="button" 
                            data-modal-close=""
                            onClick={() => {dispatch(setIsOrderPlaced(false))}}
                        >
                            BACK TO HOMEPAGE
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
} 