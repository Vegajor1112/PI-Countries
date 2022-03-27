import style from './FilterBar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useFilter, useOrder } from '../../hooks'
import {CONTINENTS} from '../../consts'

const FilterBar=(props)=>{      
       
    const [order,setOrder]=useOrder();
    const [filter,setFilter]=useFilter();

    
    const handleOrderChange=(e)=>{
        const property=e.target.name;
        const value=e.target.value;
        setOrder(property,value)
    }

    const handleFilterChange=(e)=>{
        const property=e.target.name;
        const value=e.target.value;
        setFilter(property,value)
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

                
                <div className={style.radioContainer}>
                    <label htmlFor="ascend">Ascend</label>
                    <input type="radio" name="orderType" id="ascend" checked={order.orderType==="ascend"} value="ascend" onChange={handleOrderChange} />
                    <label htmlFor="descend">Descend</label>
                    <input type="radio" name="orderType" id="descend" checked={order.orderType==="descend"} value="descend" onChange={handleOrderChange} />
                </div>
            </div>

            <div className={style.filterContainer}>
                <span>Filter by:</span>
                <div className={style.radioContainer}>
                    <label htmlFor="continent">Continent:</label>
                    <select name="continent" id="continent" value={filter.continent} onChange={handleFilterChange}> Continent
                        <option></option>
                        {CONTINENTS.map((continent)=>{return <option key={continent} >{continent}</option>})}
                    </select>
                </div>

                
                <div className={style.radioContainer}>
                    <label htmlFor="continent">Continent:</label>
                    <select name="continent" id="continent" value={filter.continent} onChange={handleFilterChange}> Continent
                        <option></option>
                        {CONTINENTS.map((continent)=>{return <option key={continent} >{continent}</option>})}
                    </select>
                </div>
            </div>
        </div>
    )   
}

export default FilterBar;