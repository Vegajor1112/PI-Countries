import style from './SearchBar.module.css';
import {useState} from 'react'


const SearchBar=()=>{
    const [input,setInput] = useState("");

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    return(
        <div className={style.mainContainer}>
            <input type="text" className={style.searchInput} value={input} onChange={handleChange} />
            <button className={style.searchButton} >Search</button>
        </div>
    )
}

export default SearchBar;