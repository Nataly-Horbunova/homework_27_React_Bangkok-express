import SpicinessFilter from './SpicinessFilter';
import NutsFilter from './NutsFilter';
import VegeterianFilter from './VegeterianFilter';
import { useDispatch, useSelector } from "react-redux";
import { setSpicinessFilter } from '../../features/menu/menuSlice';


export default function Filters() {
    const dispatch = useDispatch();
    const spiciness = useSelector((state) => state.menu.spicinessFilter);

    return (
        <div className="container">
            <div className="filters">
                <SpicinessFilter value={spiciness} setValue={(val) => dispatch(setSpicinessFilter(val))}/>
                <NutsFilter/>
                <VegeterianFilter/>
            </div>
      </div>
    );
}