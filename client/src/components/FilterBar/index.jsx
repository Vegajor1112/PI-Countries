import style from './FilterBar.module.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOrder } from '../../store/actions'
import { useFilter, useOrder } from '../../hooks'


const FilterBar=(props)=>{      
       
    const [order,setOrder]=useOrder();
    const [filter]=useFilter()
    
    const handleOrderChange=(e)=>{
        const property=e.target.name;
        const value=e.target.value;
        setOrder(property,value)
    }

    return(
        <div className={style.mainContainer}>
            <div className={style.filterContainer}>
                <span>Order by:</span>
                <div className={style.radioContainer}>
                    <label htmlFor="name">Name:</label>
                    <input type="radio" name="orderBy" id="name" checked={order.orderBy==="name"} value="name" onChange={handleOrderChange} />
                    <label htmlFor="population">Population</label>
                    <input type="radio" name="orderBy" id="population" checked={order.orderBy==="population"} onChange={handleOrderChange} value="population" />
                </div>

                <span>Order type:</span>
                <div className={style.radioContainer}>
                    <label htmlFor="ascend">Ascend</label>
                    <input type="radio" name="orderType" id="ascend" checked={order.orderType==="ascend"} value="ascend" onChange={handleOrderChange} />
                    <label htmlFor="descend">Descend</label>
                    <input type="radio" name="orderType" id="descend" checked={order.orderType==="descend"} value="descend" onChange={handleOrderChange} />
                </div>
            </div>
        </div>
    )   
}

export default FilterBar;