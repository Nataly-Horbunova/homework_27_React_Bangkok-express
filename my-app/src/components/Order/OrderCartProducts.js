import OrderCartProduct from './OrderCartProduct';
import { useSelector } from "react-redux";

export default function OrderCartProducts() {
  const cart = useSelector((state) => state.cart.data);

    return (  
        <>
          {
            cart.map((product) => {
              return <OrderCartProduct key={ product.id } {...product} count={product.count} product={product}/>
            })
          }
        </>
    );
}