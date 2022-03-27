import style from './CountriesContainer.module.css'
import {useSelector} from 'react-redux'
import { useEffect, useState} from 'react';
import CountryItem from '../CountryItem';
import FilterBar from '../FilterBar';
import Pagination from '../Pagination';

const CountriesContainer=(props)=>{

    const countries=useSelector((state)=>state.countries)
    const data=countries;
    const dataLimit=10;
    const pages = Math.round(data.length/dataLimit);
    const [currentPage,setCurrentPage]=useState(1);

    const goToNextPage=()=>{if(currentPage<pages)setCurrentPage(currentPage+1)};
    const goToPreviousPage=()=>{if(currentPage>1)setCurrentPage(currentPage-1)};
    
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
    useEffect(()=>{setCurrentPage(1)},[data])



    return(<>
        <FilterBar></FilterBar>
        <Pagination currentPage={currentPage} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}></Pagination>
        <div className={style.mainContainer}>
            
           {getPaginatedData().length>0?                
                !getPaginatedData()[0].hasOwnProperty("notFound")?
                    getPaginatedData().map(country=>{
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
        </>)
}

export default CountriesContainer;