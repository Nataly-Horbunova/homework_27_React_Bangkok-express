/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useState, useEffect} from 'react';
import angleIcon from '../../assets/icons/angle-icon.svg';
import CategoryRibbon from './CategoryRibbon';
import { findCategories } from '../../functions';
import { products } from '../../constants'


export default function CategoriesRibbon() {
const categories = ["All", ...findCategories(products)];
const [scrollPosition, setScrollPosition] = useState(0);
const [scrollWidth, setScrollWidth] = useState(0);
const scrollRef = useRef();

const handleClickButton = (val) => {
    scrollRef.current.scrollLeft += val;
    console.log(scrollPosition);
    console.log(scrollWidth);
  }

  useEffect(() => {
    if(scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setScrollWidth(scrollWidth);

      scrollRef.current.addEventListener("scroll", () => {
        setScrollPosition(+scrollRef.current.scrollLeft)
      })
    }
  }, [scrollRef]);

    return (
        <div className="container">
        <h2 className="section-heading">Our Menu</h2>
        <div>
            <div className="container">
                <div className="ribbon">
                {scrollPosition !== 0 &&
                    <div className="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible" onClick={() => handleClickButton(-300)} >
                        <img src={angleIcon} alt="icon"/>
                    </div>
                }
                    <nav className="ribbon__inner" ref={scrollRef}>
                    {
                    categories.map((category, index) => {
                        return <CategoryRibbon key={index} category={category}/>
                    })
                    }
                    </nav>
                    <div className="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible" onClick={() => handleClickButton(300)}>
                        <img src={angleIcon} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>



        
    );
}