import style from './CountryDetail.module.css';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountry } from '../../store/actions';


const CountryDetail=(props)=>{
    const id=props.id;
    const dispatch = useDispatch();
    const country = useSelector(store=>store.country)
    const {nombre,bandera,continente,capital,subregion,area,poblacion,Activities}=country;
    
    useEffect(()=>{dispatch(getCountry(id))},[dispatch,id])

    return(
        <div className={style.mainContainer}>
            
            <p>Código: {id}</p>
            <p>Nombre: {nombre}</p>
            <p>Contienente: {continente}</p>
            <p>Subregion: {subregion}</p>
            <p>Capital: {capital}</p>
            <p>Area: {area} km2</p>
            <p>Población: {poblacion} habitantes</p>
        </div>)
}

export default CountryDetail;