import { useDispatch, useSelector } from "react-redux";
import { setNoNutsFilter } from '../../features/menu/menuSlice';

export default function NutsFilter() {
    const dispatch = useDispatch();
    const noNutsFilter = useSelector((state) => state.menu.noNutsFilter);

    return (
        <div className="filters__group">
            <div className="filters__checkbox">
                <input
                    className="styled-checkbox"
                    id="nuts-checkbox"
                    type="checkbox"
                    value="1"
                    onChange={() => {
                        dispatch(setNoNutsFilter(!noNutsFilter));
                    }}
            
                />
                <label htmlFor="nuts-checkbox">
                    <span className="filters__label">No nuts</span>
                </label>
            </div>
        </div>
    );
}