import axios from 'axios';
import {useEffect, useState} from 'react';
import style from './ActivityForm.module.css';
import { validate } from '../../utils';
import NavBar from '../NavBar';
import Min from '../Min';

const ActivityForm = (props)=>{

    const [countries,setCountries]=useState([]);
    
    console.log(countries.length)
    
    
    useEffect(()=>{
        async function fetchCountries(){
            const fetchedCountries=await axios.get('http://localhost:3001/countries/formData')
            setCountries(fetchedCountries.data);}
        fetchCountries();        
    },[])

    const [form,setForm]=useState({
        nombre:"",
        dificultad:"1",
        duracion:"1",
        temporada:"Winter",
        idCountries:[]
    })

    const handleInputChange=(e)=>{
        const thisCase=e.target.name;
        const value=e.target.value
        if(thisCase==="idPaises"){
            setForm({...form,idCountries:[...form.idCountries,value]});            
        }else{
            setForm({...form,[thisCase]:value})
        }
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {valid,message}=validate(form);
        if(valid){
            await axios.post('http://localhost:3001/activity',form);
            alert(`${message} - Activity created`)
        }else{
            alert(message)
        }
        
    }

    const removeCountry=(e)=>{
        setForm({...form,idCountries:form.idCountries.filter(id=>id!==e.target.value)})
    }   
    
    return(
        <>
          
        <div className={style.mainContainer}>
            
        <div className={style.header}>
            <p>Create New Activity</p>
        </div>


    <form className={style.form} onSubmit={handleSubmit} autoComplete="off">

        <div className={style.inputs}>
            <label htmlFor="nombre" className={style.label}>Name:</label>
            <input type="text" name="nombre" id="nombre" onChange={handleInputChange} value={form.nombre} className={style.input} />
        
            <label htmlFor="dificultad" className={style.label}>Difficulty:</label>
            <input type="number" name="dificultad" id="dificultad" min="1" max="5" onChange={handleInputChange} value={form.dificultad} className={style.input}/>
        
            <label htmlFor="duracion" className={style.label}>Duration:</label>
            <input type="number" name="duracion" id="duracion" min="1" max="8" onChange={handleInputChange} value={form.duracion} className={style.input}/>
        
            <label htmlFor="temporada" className={style.label}>Season:</label>
            <select name="temporada" id="temporada" onChange={handleInputChange} value={form.temporada} className={style.input}>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
            </select>
        
            <label htmlFor="idPaises" className={style.label}>Countries:</label>
            <select name="idPaises" id="idPaises" onChange={handleInputChange} className={style.input}>
                <option value="" disabled></option>
                {countries.length!==0?
                countries.map(country=><option key={country.id} value={country.id}>{country.nombre}</option>):"Loading"}
            </select>
        </div>
        <div className={style.footer}>
            <div className={style.selectedCountries} >
                {form.idCountries.length!==0?
                form.idCountries.map(id=><Min key={id} countryId={id} onClickFunction={removeCountry} />):
                <span>No countries selected</span>}
            </div>
            <input type="submit" value="Submit" className={style.submitBtn} />
        </div>
        
    </form>
    </div>
    </>)
}

export default ActivityForm;