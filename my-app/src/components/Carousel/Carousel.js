import CarouselItem from './CarouselItem';
import CarouselLoading from './CarouselLoading';
import angleIcon from '../../assets/icons/angle-icon.svg';
import angleLeftIcon from '../../assets/icons/angle-left-icon.svg';
import { useState } from 'react';
import { useSelector } from "react-redux";

export default function Carousel ( { isLoading }) {
    const [count, setCount] = useState(0);
    const carouselPosition = `${count*(-100)}%`;
    const carouselProducts = useSelector((state) => state.menu.carouselProducts);

    return (
        <div className="container">
            <div className="carousel">
            {isLoading && <CarouselLoading/>} 
                <div 
                    className="carousel__arrow carousel__arrow_right" 
                    style={count === carouselProducts.length -1 ? {display: "none"} : {}}
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                <img src={angleIcon} alt="icon" />
                </div>
                <div 
                    className="carousel__arrow carousel__arrow_left" 
                    style={count === 0 ? {display: "none"} : {}}
                    onClick={() => {
                        setCount(count - 1)
                    }}
                >
                <img src={angleLeftIcon} alt="icon" />
                </div>
                <div 
                    className="carousel__inner"
                    style={{left: `${carouselPosition}`}}
                    >
                {
                    carouselProducts.map((product) => {
                        return <CarouselItem key={product.id} {...product} product={product}/>
                    })
                }
                </div>
            </div>
      </div>
    );
}