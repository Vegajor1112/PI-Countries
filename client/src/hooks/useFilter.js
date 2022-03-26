import { useSelector } from "react-redux";

const useFilter = () => {
  const filter = useSelector((store) => store.filter);

  return [filter];
};

export default useFilter;
