import Product from './Product';
import ProductsSkeleton from './ProductsSkeleton';
import { useSelector } from "react-redux";
import { filterProducts } from '../../functions'


export default function Products({ isLoading }) {
  const products = useSelector((state) => state.menu.products);
  const categoryFilter = useSelector((state) => state.menu.categoryFilter);
  const vegeterianFilter = useSelector((state) => state.menu.vegeterianFilter);
  const noNutsFilter = useSelector((state) => state.menu.noNutsFilter);
  const spicinessFilter = useSelector((state) => state.menu.spicinessFilter);

  const filteredProducts = filterProducts(products, categoryFilter, vegeterianFilter, noNutsFilter, spicinessFilter)

      return (
        <div className="container">
          <div className={`products-grid ${isLoading ? "is-loading" : ""}`} >
            {isLoading && <ProductsSkeleton/>}
            <div className="products-grid__inner">
            {
              filteredProducts.map((product) => {
                return <Product key={ product.id } {...product} product={product}/>
              })
            }
            </div>
          </div>
        </div>
      );
  }