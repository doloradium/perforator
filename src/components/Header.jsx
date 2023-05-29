import styled, { css } from "styled-components"
import { useEffect } from 'react';

import logo from '../img/logo.svg'
import whatsapp from '../img/whatsapp.svg'
import youtube from '../img/youtube.svg'
import vk from '../img/vk.svg'
import insta from '../img/insta.svg'
import telegram from '../img/telegram.svg'

import "../index.css"

const Wrapper = styled.div`
    z-index: 1000;
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
        &:first-child {
            transform: rotate(45deg)
        }
        &:last-child {
            transform: rotate(135deg)
        }
    `}
`

const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: calc(20px + 1%);
    align-items: center;
`

const Logo = styled.img`
    width: 3.5%;
    min-width: 40px;
`

const SideMenu = styled.div`

`

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0000006c;
    top: 0;
    left: 0;
    position: fixed;
    opacity: 0;
    display: none;
    transition: 0.5s;
`

const BurgerContainer = styled.div`
    width: fit-content;
    height: 100vh;
    box-sizing: border-box;
    top: 0;
    right: 0;
    background-color: #272727;
    position: fixed;
    z-index: 1000;
    transition: 0.5s;
    transform: translate(100%, 0);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: calc(30px + 1vw) calc(25px + 1vw);

`

const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    color: #FFFFFF;
    font-size: 2.3vw;
`

export const Cross = styled.div`
    width: 3vw;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    min-width: 40px;
    ${props => props.index && css`
        position: absolute;
        z-index: 1001;
        width: 2vw;
        height: 2vw;
        min-width: 30px;
        min-height: 30px;
        top: calc(20px + 1%);
        right: calc(20px + 1%);
    `}
    ${props => props.transparent && css`
        opacity: 0.75;
    `}
`

const Heading = styled.a`
    margin: 0;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 700;
    font-size: calc(20px + 0.7vw);
`

const NavPanel = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
`

const NavItem = styled.a`
    text-decoration: none;
    color: #BE264C;
    font-size: calc(26px + 0.5vw);
    display: block;
    margin-bottom: 5%;
    text-align: right;
`

const Socials = styled.div`
    display: grid;
    gap: calc(15px + 1.5vw);
    grid-template-columns: repeat(3, 1fr);
    direction: rtl;
    width: 65%;
    margin: 0 auto 0 0;
`

const SocialsItem = styled.a`
    width: 4vw;
    min-width: 50px;
    display: block;
    width: min-content;
`

const SocialsIcon = styled.img`
    width: 4vw;
    min-width: 50px;
    display: block;
`

const Mail = styled.a`
    text-decoration: none;
    color: #BE264C;
    font-size: calc(18px + 1vw);
    display: block;
    margin-bottom: 5%;
    text-align: right;
    margin: 0;
`

function Header() {
    useEffect(() => {
        let header = document.querySelector('#header')
        let toggleClass = "is-sticky"
        let burgerButton = document.querySelector('#burger')
        let cross = document.querySelector('#cross')
        let background = document.querySelector('#background')
        let container = document.querySelector('#container')

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset
            if (currentScroll > 150) {
                header.classList.add(toggleClass)
            } else {
                header.classList.remove(toggleClass)
            }
        });

        burgerButton.addEventListener('click', function () {
            container.style.transform = "translate(0, 0)"
            background.style.display = "block"
            background.style.opacity = "1"
            background.style.zIndex = "100"
            document.body.style.overflow = "hidden"
        })

        cross.addEventListener('click', function () {
            container.style.transform = "translate(100%, 0)"
            background.style.display = "none"
            background.style.opacity = "0"
            background.style.zIndex = "-1"
            document.body.style.overflow = "overlay"
        })

        setInterval(function () {
            if (window.screen.width / window.screen.height > 0.75) {
                container.style.width = 'fit-content'
            } else if (window.screen.width / window.screen.height <= 0.75) {
                container.style.width = '100vw'
            }
        }, 1000)
    }, [])

    return (
        <Wrapper id="header">
            <HeaderContainer>
                <Logo src={logo} alt="AO Performance"></Logo>
                <Burger id="burger">
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Burger>
            </HeaderContainer>
            <SideMenu>
                <Background id="background"></Background>
                <BurgerContainer id="container">
                    <HeadingContainer>
                        <Cross id="cross">
                            <Line cross></Line>
                            <Line cross></Line>
                        </Cross>
                        <Heading href="#">AO Performance</Heading>
                    </HeadingContainer>
                    <NavPanel>
                        <NavItem href="#">О нас</NavItem>
                        <NavItem href="#">Услуги</NavItem>
                        <NavItem href="#">Команда</NavItem>
                        <NavItem href="#">Контакты</NavItem>
                        <NavItem href="#">Кейсы</NavItem>
                    </NavPanel>
                    <Socials>
                        <SocialsItem href="#">
                            <SocialsIcon src={insta}></SocialsIcon>
                        </SocialsItem>
                        <SocialsItem href="#">
                            <SocialsIcon src={telegram}></SocialsIcon>
                        </SocialsItem>
                        <SocialsItem href="#">
                            <SocialsIcon src={youtube}></SocialsIcon>
                        </SocialsItem>
                        <SocialsItem href="#">
                            <SocialsIcon src={vk}></SocialsIcon>
                        </SocialsItem>
                        <SocialsItem href="#">
                            <SocialsIcon src={whatsapp}></SocialsIcon>
                        </SocialsItem>
                    </Socials>
                    <Mail href="mailto:aoperformance@mail.ru">aoperformance@mail.ru</Mail>
                </BurgerContainer>
            </SideMenu>
        </Wrapper>
    )
}

export default Header;
