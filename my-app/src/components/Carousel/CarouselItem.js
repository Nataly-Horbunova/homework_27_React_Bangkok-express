import plusIcon from "../../assets/icons/plus-icon.svg"
import { useDispatch } from "react-redux";
import { addToCart, setShake } from '../../features/cart/cartSlice';

export default function CarouselItem({ title, price, img, product }) {
    const dispatch = useDispatch();

    return (
        <>
        <div className="carousel__slide">
            <img
                src={require(`../../assets/carousel/${img}`)}
                className="carousel__img"
                alt="slide"
            />
            <div className="carousel__caption">
            <span className="carousel__price">{'€'+ price.toFixed(2)}</span>
            <div className="carousel__title">{title}</div>
            <button 
                type="button" 
                className="carousel__button"
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
        </>
    );
}