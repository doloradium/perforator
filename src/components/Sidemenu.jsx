import styled, { css } from "styled-components"
import { useEffect } from 'react';

const Wrapper = styled.div`

`

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0000006c;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
`

const BurgerContainer = styled.div`
    width: 20vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #272727;
    position: absolute;
    z-index: 100;
    transition: 0.5s;
    transform: translate(500%, 0);
`

const SideMenu = () => {
    useEffect(() => {
        let burgerButton = document.querySelector('#burger')
        let background = document.querySelector('#background')
        let container = document.querySelector('#container')
        burgerButton.addEventListener('click', function () {
            container.style.transform = "translate(400%, 0)"
            background.style.opacity = "1"
            background.style.zIndex = "100"
            document.body.style.overflow = "hidden"
        })
    }, [])

    return (
        <Wrapper>
            <Background id="background">
            </Background>
            <BurgerContainer id="container">
            </BurgerContainer>
        </Wrapper>
    )
}

export default SideMenu