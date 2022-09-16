import React, {useState, useRef} from 'react';

export default function SpicinessFilter ({ value, setValue }) {
    const [width, setWidth] = useState(75)
    const sliderRef = useRef();
    const thumbRef = useRef();

    const mathSpice = (percent) => {
        if(percent <= 12.5) {
          setValue(0)
        } else if(percent <= 37.5) {
          setValue(1)
        }else if(percent <= 62.5) {
          setValue(2)
        }else if(percent <= 87.5) {
          setValue(3)
        }else if(percent <= 100) {
          setValue(4)
        }
    }

    const onMouseDown = (event) => {
        event.preventDefault(); 

        let shiftX = event.clientX - thumbRef.current.getBoundingClientRect().left;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);     

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - sliderRef.current?.getBoundingClientRect().left;

            if (newLeft < 0) {
                newLeft = 0;
            }
            const rightEdge = sliderRef.current?.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            const percent = Math.floor(newLeft/rightEdge*100);
            setWidth(percent);
            mathSpice(percent);
        }

        function onMouseUp() {
            mathSpice(thumbRef.current.style.left.split('%')[0]);

            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };

    return (
        <div className="filters__group">
            <label className="filters__label">Max spiciness</label>
            <div className="filters__slider">
                <div className="slider" ref={sliderRef} > {/* onClick={onClick} */}
                    <div className="slider__thumb"  ref={thumbRef} style={{left: `${width}%`}} onMouseDown={onMouseDown} >
                        <span className="slider__value">{value}</span>
                    </div>
                    <div className="slider__progress" style={{width: `${width}%`}}></div>
                    <div className="slider__steps">
                    {new Array(5).fill('').map((item, i) => <span key={i} className={value === i ? 'slider__step-active' : null}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}