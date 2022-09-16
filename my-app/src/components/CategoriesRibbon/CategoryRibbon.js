/* eslint-disable jsx-a11y/anchor-is-valid */
import { setCategoryFilter } from '../../features/menu/menuSlice'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function CategoryRibbon({ category }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.menu.categoryFilter);

  const classSelected = filter === category ? "ribbon__item_active" : "";
  const categoryClass = `ribbon__item ${classSelected}`;
  const updateFilter = (value) => dispatch(setCategoryFilter(value));

    return (
        <a 
            href="#" className={categoryClass}
            onClick={(event) => {
                event.preventDefault();
                updateFilter(category);
              }}
        >{category}</a>
    );
}