import style from './SearchBar.module.css';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getCountries,searchCountries} from '../../store/actions';
import useSearchInput from '../../hooks/useSearchInput';

const SearchBar=()=>{    

    const dispatch=useDispatch()
    const [searchInput,setSearchInput]=useSearchInput();
    

    const handleChange=(e)=>{
        const newInput=e.target.value
        dispatch(setSearchInput(newInput));
    }   
        
    useEffect(()=>{
        searchInput?
        dispatch(searchCountries(searchInput)):
        dispatch(getCountries())
    },[searchInput,dispatch])

    return(
        <div className={style.mainContainer}>
            <input type="text" className={style.searchInput} value={searchInput} onChange={handleChange} />
            <button className={style.searchButton} >Search</button>
        </div>
    )
}

export default SearchBar;