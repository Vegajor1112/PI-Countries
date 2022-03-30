import style from './LandingBackground.module.css'
import NavigationButton from '../NavigationButton';

const LandingBackground=()=>{
    return(
    <div className={style.background}>
        <div className={style.mainContainer}>
            <p className={style.phrase}>“The world is a book and those who do not travel read only one page.” ~ </p>
            <p className={style.phrase}>Saint Augustine</p>
            <NavigationButton goTo="/home" label="Travel!" className={style.navBtn} />
        </div>  
    </div>
    );
}

export default LandingBackground;