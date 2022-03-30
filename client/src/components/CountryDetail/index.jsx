import style from './CountryDetail.module.css';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountry } from '../../store/actions';
import NavBar from '../NavBar';

const CountryDetail=(props)=>{
    const id=props.id;
    const dispatch = useDispatch();
    const country = useSelector(store=>store.country)
    const {nombre,bandera,continente,capital,subregion,area,poblacion,Activities}=country;
    
    useEffect(()=>{dispatch(getCountry(id))},[dispatch,id])

    return(
        <>
            

        <div className={style.mainContainer}>
            <div className={style.header}>
                <img src={bandera} alt="flag" className={style.flagImg} />
                <h1>{nombre}</h1>
                <h2>{id}</h2>
            </div>
            <div className={style.body}>
                <div className={style.item}>
                    <p className={style.label}>Continent:</p> 
                    <span className={style.info}>{continente}</span>  
                </div>   
                <div className={style.item}>
                    <p className={style.label}>Subregion:</p>   
                    <span className={style.info}>{subregion}</span> 
                </div>  
                <div className={style.item}>
                    <p className={style.label}>Capital:</p>   
                    <span className={style.info}>{capital}</span> 
                </div>  
                <div className={style.item}>
                    <p className={style.label}>Area:</p>  
                    <span className={style.info}>{area} km2</span> 
                </div>  
                <div className={style.item}>
                    <p className={style.label}>Population:</p>  
                    <span className={style.info}>{poblacion} habs.</span> 
                </div>  
                <div className={style.item}>
                    <p className={style.label}>Activities:</p>   
                    {Activities&&Activities.length!==0?Activities.map(activity=><><span>{activity.nombre}</span><br></br></>):<span>No activities</span>}
                </div>               
                               
            </div>
        </div></> )
}

export default CountryDetail;