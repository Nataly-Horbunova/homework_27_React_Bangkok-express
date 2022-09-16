import { useDispatch, useSelector } from "react-redux";
import { setVegeterianFilter } from '../../features/menu/menuSlice';

export default function VegeterianFilter() {
    const dispatch = useDispatch();
    const vegeterianFilter = useSelector((state) => state.menu.vegeterianFilter);

    return (
        <div className="filters__group">
            <div className="filters__checkbox">
                <input
                    className="styled-checkbox"
                    id="vegeterian-checkbox"
                    type="checkbox"
                    value="1"
                    onChange={() => {
                        dispatch(setVegeterianFilter(!vegeterianFilter));
                      }}
                />
                <label htmlFor="vegeterian-checkbox">
                    <span className="filters__label">Vegeterian only</span>
                </label>
            </div>
        </div>
    );
}