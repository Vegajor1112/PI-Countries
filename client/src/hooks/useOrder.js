import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../store/actions";

const useOrder = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.order);

  const setNewOrder = (property, value) => {
    const newOrder = {
      ...order,
      [property]: value,
    };
    dispatch(setOrder(newOrder));
  };

  return [order, setNewOrder];
};

export default useOrder;
