import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/actions";

const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.filter);

  const setNewFilter = (property, value) => {
    const newFilter = { ...filter, [property]: value };
    console.log("Despachando cambios");
    dispatch(setFilter(newFilter));
  };
  return [filter, setNewFilter];
};

export default useFilter;
