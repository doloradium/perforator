import styled, { css } from "styled-components"
import { useEffect } from 'react'
import { Link } from "react-router-dom"

import logo from '../img/logo.svg'

import "../index.css"

const Wrapper = styled.div`
position: fixed;
  width: 100%;
  background-color: #121212;
  padding: 0;
  transition: 0.5s;
  z-index: 1002;
  transform: translateY(0);
  @media screen and (max-width: 600px) {
        background-color: #000000;
    }
`

const Burger = styled.div`
    width: 3.5%; 
    height: 1.5vw;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    min-width: 40px;
    min-height: 18px;
    cursor: pointer;
`

export const Line = styled.span`
    width: 100%;
    display: block;
    height: 14%;
    background-color: #FFFFFF;
    ${props => props.cross && css`
        position: absolute;
        top: 50%;
        left: 0;
        height: 10%;
        display: block;
        @media screen and (max-width: 600px) {
            display: none;
        }
        &:first-child {
            transform: rotate(45deg)
        }
        &:nth-child(2) {
            transform: rotate(135deg)
        }
    `}
    ${props => props.video && css`
        position: absolute;
        top: 50%;
        left: 0;
        height: 10%;
        display: block;
        &:first-child {
            transform: rotate(45deg)
        }
        &:nth-child(2) {
            transform: rotate(135deg)
        }
    `}
`

const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: calc(5px + 1%) calc(20px + 1%);
    align-items: center;
    @media screen and (max-width: 600px) {
        padding: calc(15px + 1%) calc(15px + 1%);
    }
`

const Logo = styled.img`
    min-width: 40px;
`

const LogoLink = styled(Link)`
    display: block;
    width: 3.5%;
    min-width: 40px;
`

function Header() {
    useEffect(() => {
        let header = document.querySelector('#header')
        let burgerButton = document.querySelector('#burger')
        let background = document.querySelector('#background')
        let container = document.querySelector('#container')

        let lastScroll = 150
        let currentScroll = 150

        window.addEventListener("scroll", () => {
            currentScroll = window.pageYOffset
            if (currentScroll < lastScroll) {
                header.style.transform = 'translateY(0)'
            } else {
                header.style.transform = 'translateY(-100%)'
            }
            lastScroll = currentScroll
        })

        burgerButton.addEventListener('click', function () {
            container.style.transform = "translate(0, 0)"
            background.style.display = "block"
            background.style.opacity = "1"
            background.style.zIndex = "1005"
            document.body.style.overflow = "hidden"
            if (window.pageYOffset > 50) {
                header.style.transform = 'translateY(-100%)'
            }
        })
    }, [])

    return (
        <Wrapper id="header">
            <HeaderContainer>
                <LogoLink to="/">
                    <Logo src={logo} alt="AO Performance"></Logo>
                </LogoLink>
                <Burger id="burger">
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Burger>
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header;
