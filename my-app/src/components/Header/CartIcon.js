import React, {useRef, useEffect} from 'react';
import { setIsCartOpen } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import {countTotalPrice, countTotalCount} from '../../functions'

export default function CartIcon() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const shake = useSelector((state) => state.cart.shake);
  const classVisible = cart.length === 0 ? "" : "cart-icon_visible";
  const classSahke = shake ? "shake" : "";
  const cartButtonClass = `cart-icon ${classVisible} ${classSahke}`
  const buttonRef = useRef();

  const onScroll = (e) => {
    const elPosition = buttonRef.current?.getBoundingClientRect();

    if(elPosition.top <= window.scrollY) {
      buttonRef.current.style.position = 'fixed'
      buttonRef.current.style.right = '12%'
    } else {
      buttonRef.current.style.position = 'absolute'
      buttonRef.current.style.right = '0'
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    };
  }, []);

    return (
        <button 
          ref={buttonRef}
          type="button" 
          className={cartButtonClass} 
          onClick={() => {dispatch(setIsCartOpen(true))}}
        >  
          <div className="cart-icon__inner">
            <span className="cart-icon__count">{countTotalCount(cart)}</span>
            <span className="cart-icon__price">{'€'+countTotalPrice(cart)}</span>
          </div>
        </button>
    );
}