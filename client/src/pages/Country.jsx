import { CountryDetail } from "../components"

const Country = (props)=>{
    const id=props.match.params.id;
    return<>        
        <CountryDetail id={id}></CountryDetail>
    </>
}

export default Country;

