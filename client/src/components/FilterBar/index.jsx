import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../store/actions';
import style from './FilterBar.module.css'

const FilterBar=()=>{

    const dispatch=useDispatch();
    const order = useSelector((state)=>state.order);
    const [localOrder,setLocalOrder]=useState(order);
    console.log("render")

    const handleChange=(e)=>{
        const property=e.target.id;
        const value=e.target.checked;
        setLocalOrder({
            ...localOrder,
            [property]:value
        })
    }
    
    useEffect(()=>{
        dispatch(setOrder(localOrder))
    },[dispatch,localOrder])

    return(
        <div className={style.mainContainer}>
            <div className={style.orderContainer}>
                <label htmlFor="orderByPopulation">Population:</label>
                <input type="checkbox" id="orderByPopulation" checked={localOrder.orderByPopulation} onChange={handleChange} />
            </div>
            <div className={style.orderContainer}>
                <label htmlFor="orderByName">Name:</label>
                <input type="checkbox" id="orderByName" checked={localOrder.orderByName} onChange={handleChange} />
            </div>
        </div>
    )   
}

export default FilterBar;