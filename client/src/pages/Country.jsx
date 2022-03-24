import { NavBar } from "../components"
import { CountryDetail } from "../components"

const Country = (props)=>{
    const id=props.match.params.id;
    return<>
        <NavBar />
        <CountryDetail id={id}></CountryDetail>
    </>
}

export default Country;

