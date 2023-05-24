import styled, { css } from "styled-components"
import { useEffect } from 'react';

const Burger = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8200006c;
    top: 0;
    left: 100%;
    position: absolute;
    z-index: 100;
    transition: 0.5s;
`

const SideMenu = () => {
    useEffect(() => {
        let burgerButton = document.querySelector('#burger')
        let burgerMenu = document.querySelector('#menu')
        burgerButton.addEventListener('click', function () {
            burgerMenu.style.left = "0"
        })
    }, [])

    return (
        <Burger id="menu">

        </Burger>
    )
}

export default SideMenu