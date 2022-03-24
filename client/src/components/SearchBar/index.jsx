import style from './SearchBar.module.css';
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries,searchCountries } from '../../store/actions';

const SearchBar=()=>{
    const [input,setInput] = useState("");

    const dispatch=useDispatch();

    const handleChange=(e)=>{
        setInput(e.target.value);        
    }

    const order=useSelector((state)=>state.order)
    
    useEffect(()=>{
        input?
        dispatch(searchCountries(input,order)):
        dispatch(getCountries(order))
    },[input,dispatch,order])

    return(
        <div className={style.mainContainer}>
            <input type="text" className={style.searchInput} value={input} onChange={handleChange} />
            <button className={style.searchButton} >Search</button>
        </div>
    )
}

export default SearchBar;