import logo from '../../assets/img/logo.png'
import style from './NavBar.module.css'
import SearchBar from '../SearchBar'
import NavigationButton from '../NavigationButton'

const NavBar = ()=>{
    return(
        <>
        <div className={style.mainContainer}>
            <div className={style.logoContainer}>
                <img src={logo} alt="logo" className={style.logo} />
                <span className={style.logoLabel}>My Countries</span>
                
            </div>
            
            <SearchBar />       
            <NavigationButton goTo="/createActivity" label="Create New Activity" />    
        </div>
        
        </>
        
    )    
}

export default NavBar;