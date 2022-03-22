import styled from "styled-components";
import { NavBar } from "../components";


const MainContainer = styled.div`
    border:1px solid black;
`

const LandingPage=(props)=>{
    return(
    <>
        <MainContainer>
            <NavBar />
        </MainContainer>
    </>
    )
}

export default LandingPage;