import style from './CountryItem.module.css';
import {useHistory} from 'react-router-dom'

const CountryItem=(props)=>{
    const {id,nombre,bandera,continente}=props;
    const history=useHistory()

    const handleClick=()=>{
        history.push(`/countries/${id}`);
    }

    return(
    <div className={style.mainContainer}>
        <img src={bandera} alt="flag" className={style.countryImage} />
        <div className={style.data}>
        <span className={style.countryName}>{nombre}</span>
        <span className={style.continent}>{continente}</span>
        </div>
        <button className={style.detailsButton}onClick={handleClick} >View details...</button>
    </div>)
}

export default CountryItem;