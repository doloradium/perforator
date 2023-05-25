import styled from "styled-components"
import { useEffect } from 'react';

import logo from '../img/logo.svg'

import "../index.css";

const Container = styled.div`
    width: 3.5%; 
    height: 1.5vw;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    min-width: 40px;
    min-height: 18px;
    cursor: pointer;
`

const Line = styled.span`
    width: 100%;
    display: block;
    height: 14%;
    background-color: #FFFFFF;
`

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding: calc(20px + 1%);
    align-items: center;
`

const Logo = styled.img`
    width: 3.5%;
    min-width: 40px;
`

function Header() {
    useEffect(() => {
        const header = document.querySelector('#header');
        const toggleClass = "is-sticky";
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 150) {
                header.classList.add(toggleClass);
            } else {
                header.classList.remove(toggleClass);
            }
        });
    }, [])

    return (
        <Wrapper id="header">
            <Logo src={logo} alt="AO Performance"></Logo>
            <Container id="burger">
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Container>
        </Wrapper>
    )
}

export default Header;
