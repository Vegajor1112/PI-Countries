import logo from '../../assets/img/logo.png'
import style from './NavBar.module.css'
import SearchBar from '../SearchBar'
import FilterBar from '../FilterBar'

const NavBar = ()=>{
    return(
        <>
        <div className={style.mainContainer}>
            <div className={style.logoContainer}>
                <img src={logo} alt="logo" className={style.logo} />
                <span className={style.logoLabel}>Logo Label</span>
            </div>
            
            <SearchBar />           
        </div>
        
        </>
        
    )    
}

export default NavBar;