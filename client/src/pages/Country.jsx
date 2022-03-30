import { CountryDetail , NavBar } from "../components"

const Country = (props)=>{
    const id=props.match.params.id;

    return(
            <>        
                <NavBar disabled="disabled" />
                <CountryDetail id={id} />
            </>
    )
}

export default Country;

