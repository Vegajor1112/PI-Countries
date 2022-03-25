import style from './CountriesContainer.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect} from 'react';
import { getCountries } from '../../store/actions';
import CountryItem from '../CountryItem';
import FilterBar from '../FilterBar';

const CountriesContainer=(props)=>{

    const dispatch=useDispatch();
    const countries=useSelector((state)=>state.countries)     

    return(
        <div className={style.mainContainer}>
            <FilterBar></FilterBar>
           {countries.length!==0?                
                !countries.hasOwnProperty("notFound")?
                    countries.map(country=>{
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
                        }):<h2>No countries found...</h2>:
           "Loading..."}
        </div>
    )
}

export default CountriesContainer;