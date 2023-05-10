import styled from "styled-components"

import logo from '../img/logo.svg'

const Container = styled.div`
    width: 30px; 
    height: 20px;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
`

const Line = styled.span`
    width: 30px;
    display: block;
    height: 3px;
    background-color: #fff;
`

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 50px;
    align-items: center;
`

function Header() {
    return (
        <Wrapper>
            <img src={logo} alt="AO Performance" />
            <Container>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Container>
        </Wrapper>
    )
}

export default Header;
