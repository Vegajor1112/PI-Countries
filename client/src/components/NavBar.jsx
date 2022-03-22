import styled from "styled-components";

const MainContainer = styled.div`
    border:1px solid red;
`

const NavBar = (props)=>{
    return(        
        <MainContainer>
            <p>Este es el NavBar</p>
        </MainContainer>        
    );
}

export default NavBar;