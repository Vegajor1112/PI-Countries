import axios from 'axios';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import style from './ActivityForm.module.css';

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
        console.log(form)
        e.preventDefault();
        return await axios.post('http://localhost:3001/activity',form)
    }

    const removeCountry=(e)=>{
        setForm({...form,idCountries:form.idCountries.filter(id=>id!==e.target.value)})
    }   
    
    return(
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formItem}>
            <label htmlFor="nombre">Name:</label>
            <input type="text" name="nombre" id="nombre" onChange={handleInputChange} value={form.nombre} />
        </div>
        <div className={style.formItem}>
            <label htmlFor="dificultad">Difficulty:</label>
            <input type="number" name="dificultad" id="dificultad" min="1" max="5" onChange={handleInputChange} value={form.dificultad}/>
        </div>
        <div className={style.formItem}>
            <label htmlFor="duracion">Duration:</label>
            <input type="number" name="duracion" id="duracion" min="1" max="8" onChange={handleInputChange} value={form.duracion}/>
        </div>     
        <div className={style.formItem}>
            <label htmlFor="temporada">Season:</label>
            <select name="temporada" id="temporada" onChange={handleInputChange} value={form.temporada}>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
            </select>
        </div>       
        <div className={style.formItem}>
            <label htmlFor="idPaises">Countries:</label>
            <select name="idPaises" id="idPaises" onChange={handleInputChange}>
                {countries.length!==0?
                countries.map(country=><option key={country.id} id={country.id} value={country.id}>{country.nombre}</option>):"Loading"}
            </select>
        </div>
        <div>
            {form.idCountries.length!==0?
            form.idCountries.map(id=><div key={id}><span>-{id}-</span><button onClick={removeCountry} value={id}>X</button></div>):
            <span>No countries selected</span>}
        </div>
        <input type="submit" value="Submit" />
    </form>
    )
}

export default ActivityForm;