import style from './SearchBar.module.css';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getCountries,searchCountries} from '../../store/actions';
import { useFilter, useOrder, useSearchInput } from '../../hooks';

const SearchBar=()=>{    

    const dispatch=useDispatch()

    const [searchInput,setSearchInput]=useSearchInput();
    const [order]=useOrder();
    const [filter]=useFilter();
    

    const handleChange=(e)=>{
        const newInput=e.target.value
        setSearchInput(newInput);
    }   
        
    useEffect(()=>{
        searchInput?
        dispatch(searchCountries(searchInput,order,filter)):
        dispatch(getCountries(order,filter))
    },[searchInput,dispatch,order,filter])

    return(
        <div className={style.mainContainer}>
            <input type="text" className={style.searchInput} value={searchInput} onChange={handleChange} />            
        </div>
    )
}

export default SearchBar;