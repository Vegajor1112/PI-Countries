import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../store/actions";

const useSearchInput = () => {
  const searchInput = useSelector((state) => state.searchInput);

  const dispatch = useDispatch();

  const setNewSearchInput = (newSearchInput) => {
    dispatch(setSearchInput(newSearchInput));
  };
  return [searchInput, setNewSearchInput];
};

export default useSearchInput;
