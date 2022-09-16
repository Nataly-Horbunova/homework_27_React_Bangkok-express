import OrderHeader from './OrderHeader';
import OrderCartProducts from './OrderCartProducts';
import OrderForm from './OrderForm';

export default function Order() {
    return (
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__inner">
                <OrderHeader/>
                <div className="modal__body">
                    <div>
                        <OrderCartProducts/>
                        <OrderForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}