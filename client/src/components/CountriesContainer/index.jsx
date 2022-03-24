import style from './CountriesContainer.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import { getCountries } from '../../store/actions';
import CountryItem from '../CountryItem';
import FilterBar from '../FilterBar';

const CountriesContainer=()=>{

    const dispatch=useDispatch();

    const countries=useSelector((state)=>state.countries)

    useEffect(()=>{
        dispatch(getCountries());
    },[])

    return(
        <div className={style.mainContainer}>
            <FilterBar></FilterBar>
           {countries.map(country=>{
               const {id,nombre,bandera,continente}=country
               return(
                   
                   <CountryItem 
                    key={id}
                    id={id}
                    nombre={nombre}
                    bandera={bandera}
                    continente={continente} 
                    />
               )
           })}
        </div>
    )
}

export default CountriesContainer;