import styled, { keyframes, css } from "styled-components"
import { useEffect } from 'react'

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Cross, Line } from '../components/Header'


import "swiper/css";

import presentation from '../img/presentation.mp4'
import arrows from '../img/arrows.svg'
import example1 from '../img/example1.jpg'
import example2 from '../img/example2.jpg'
import example3 from '../img/example3.jpg'
import star from '../img/star.svg'
import commas from '../img/commas.png'

import Header from '../components/Header'
import Footer from "../components/Footer"

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: #121212;
    overflow: hidden;
    @media screen and (max-width: 600px) {
        background-color: #000000;
    }
`

const Hero = styled.section`
    margin: auto;
    height: 80vh;
    position: relative;
`

const HeroContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    height: fit-content;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%)
`

const HeroHeading = styled.h1`
    color: #FFFFFF;
    font-size: 3.5vw;
    text-align: center;
    font-weight: 700;
    padding: 0 20%;
    max-width: 60%;
    margin: auto;
    @media screen and (max-width: 768px) {
        font-size: calc(12px + 2.5vw);
        padding: 0 23%;
        max-width: 80%;
    }    
    @media screen and (max-width: 576px) {
        font-size: calc(12px + 2.5vw);
        padding: 0 15%;
        max-width: 80%;
    }
`

const HeroSubheading = styled.h2`
    color: #121212;
    font-size: 3.5vw;
    text-shadow: 1px 0 #FFFFFF, -1px 0 #FFFFFF, 0 1px #FFFFFF, 0 -1px #FFFFFF, 1px 1px #FFFFFF, -1px -1px #FFFFFF, 1px -1px #FFFFFF, -1px 1px #FFFFFF;
    text-align: center;
    margin: 0 auto 3%;
    font-weight: 700;
    padding: 0 10%;
    max-width: 80%;
    @media screen and (max-width: 768px) {
        font-size: calc(12px + 2.5vw);
        max-width: 100%;
    }
`

const VideoContainer = styled.video`
    display: block;
    z-index: 10;
    left: calc(50vw - 7.5%);
    top: -5vw;
    position: absolute;
    width: 15%;
    height: 20%;
    transition: 1s;
    object-fit: cover;
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 50vh;
        top: 0;
        left: 0;
        position: relative;
    }
`

const VideoScreen = styled.div`
    left: calc(50vw - 7.5%);
    top: -5vw;
    width: 15%;
    height: 20%;
    transition: 1s;
    background-color: #BE264C;
    z-index: 100;
    position: absolute;
    mix-blend-mode: multiply;
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 50vh;
        top: 0;
        left: 0;
    }
`

const VideoSource = styled.source``

const VideoBubble = styled.a`
    display: none;
    @media screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        width: 30vw;
        background-color: #BE264C;
        height: 30vw;
        border-radius: 100px;
        position: absolute;
        z-index: 101;
        top: -15vw;
        left: 35vw;        
    }
`

const VideoButton = styled.p`
    text-align: center;
    font-size: 3.5vw;
    font-weight: 500;

`

const PresentationImage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #BE264C;
    @media screen and (max-width: 600px) {
        display: none;
    }
`

const HiddenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #000000CD;
    top: 0;
    lefT: 0;
    z-index: 1001;
    position: fixed;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
`

const HiddenVideo = styled.video`
    width: 60%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`

const PresentationBlock = styled.div`
    position: relative;
`

const About = styled.section`
    padding: 15% 3%;    
`

const AboutImage = styled.div`
    max-width: 450px;
    width: 90%;
    max-height: 600px;
    height: 65vh;
    background-color: #BE264C;
    margin: 0 auto calc(30px + 2%);
`

const AboutText = styled.p`
    font-size: calc(14px + 0.5vw);
    color: #FFFFFF;
    line-height: 1.5;
    max-width: 700px;
    width: 90%;
    margin: auto;
    text-align: center;
    margin-bottom: calc(30px + 2%);
`

const AboutLink = styled.a`
    margin: auto;
    width: fit-content;
    display: block;
    text-decoration: none;
    transition: 0.5s;
`

const AboutButton = styled.div`
    color: #BE264C;
    font-size: calc(22px + 0.5vw);
    font-weight: 700;
    margin-bottom: 20px;
    transition: 0.5s;
    display: block;
    text-align: center;
    ${AboutLink}:hover & {
        margin-bottom: 10px;
        transition: 0.5s;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 15px;
        ${AboutLink}:hover & {
            margin-bottom: 7px;
        }   
    }
`

const AboutArrows = styled.img`
    display: block;
    margin: 0 auto;
    transition: 0.5s;
    padding: 0 30%;
    width: calc(25px + 5%);
    ${AboutLink}:hover & {
        margin-bottom: 10px;
        transition: 0.5s;
    }
    @media screen and (max-width: 768px) {
        ${AboutLink}:hover & {
            margin-bottom: 7px;
        }   
    }
`

const Fields = styled.section`
    margin-bottom: 15vw;
`

export const ThirdHeading = styled.h3`
    font-size: calc(12px + 2.8vw);
    color: #FFFFFF;
    text-align: center;
    margin: auto;
    max-width: 60%;
    margin-bottom: 5%;
    @media screen and (max-width: 1210px) {
        max-width: 90%; 
    }
    ${props => props.left && css`
        text-align: left;
        margin: 0 0 5%;
        line-height: 1;
        max-width: none;
    `}
`

const FieldsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        font-size: calc(12px + 2.5vw);
        white-space: pre;
        overflow-x: scroll;
        width: 100vw;
        max-width: 100%;
    }
    &::-webkit-scrollbar {
        height: 60px;
    }
    &::-webkit-scrollbar-track {
        background-color: #818181;
        border-left: 9.5vw solid #121212;
        border-right: 9.5vw solid #121212;
        border-top: 30px solid #121212;
        border-bottom: 30px solid #121212;
        background-clip: padding-box; 
        @media screen and (max-width: 600px) {
        border-left: 9.5vw solid #000000;
        border-right: 9.5vw solid #000000;
        border-top: 30px solid #000000;
        border-bottom: 30px solid #000000;
    }
    }
    &::-webkit-scrollbar-thumb {
        border-left: 9.5vw solid rgba(0, 0, 0, 0);   
        border-right: 9.5vw solid rgba(0, 0, 0, 0); 
        border-top: 23px solid rgba(0, 0, 0, 0);
        border-bottom: 23px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;    
        background-color: #BE264C;
    }
`

const FieldsItem = styled.a`
    min-width: 25%;
    position: relative;
    overflow: hidden;
    display: block;
    text-decoration: none;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        min-width: 60%;
        &:first-child {
            margin-left: 20%;
        }
        &:last-child {
            margin-right: 20%;
        }
    }
`

const FieldsAnimation = styled.div`
    position: absolute;
    background: linear-gradient(#27151A, #121212);
    text-align: center;
    height: 100%;
    width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    transform: translate(-100%, 0);
    transition: 0.8s;
    border: 2px solid #BE264C;
    box-sizing: border-box;
    ${FieldsItem}:hover & {
        transform: translate(0, 0);
        transition: 0.8s;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const FieldsNumber = styled.div`
    font-family: 'Bebas Neue', cursive;
    color: #121212;
    text-align: center;
    font-size: 20vw;
    margin: auto;
    display: block;
    text-shadow: 1px 0 #FFFFFF, -1px 0 #FFFFFF, 0 1px #FFFFFF, 0 -1px #FFFFFF, 1px 1px #FFFFFF, -1px -1px #FFFFFF, 1px -1px #FFFFFF, -1px 1px #FFFFFF;
    @media screen and (max-width: 768px) {
        font-size: 300px;
    }
    @media screen and (max-width: 600px) {
        color: #000000;
    }
`

const FieldsText = styled.p`
    color: #BE264C;
    font-size: 2vw;
    text-align: center;
    width: min-content;
    top: 40%;
    left: 50%;
    position: absolute;
    transition: 0.2s;
    transform: translate(-50%, -50%);
    ${FieldsItem}:hover & {
        z-index: 100;
        transition: 0.2s;
        color: #000000;
        text-shadow: 1px 0 #BE264C, -1px 0 #BE264C, 0 1px #BE264C, 0 -1px #BE264C, 1px 1px #BE264C, -1px -1px #BE264C, 1px -1px #BE264C, -1px 1px #BE264C;
    }
    @media screen and (max-width: 768px) {
        ${FieldsItem}:hover & {
            color: #BE264C;
            text-shadow: none;
        }
        font-size: 30px;
        white-space: normal; 
    }
`

const Best = styled.section`
    width: 100%;
`

const BestItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 600px) {
        height: auto;
    }
`

const SwiperLink = styled.a`
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 900;
`

const BestDescription = styled.div`
    opacity: 1;
    transition: 0.5s;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    height: 85.4%;
    padding: 10%;
    width: 65%;
    @media screen and (max-width: 600px) {
        position: relative;
        width: 100%;
        transition: 0.1s;
        opacity: 0;
        padding: 0;
    }
`

const BestScreen = styled.div`
    position: absolute;
    height: 100%;
    width: 85%;
    background-color: #be264c;
    mix-blend-mode: multiply;
    top: 0;
    left: 0;
    transition: 0.5s;
    transform: translateX(-100%);
`

const BestName = styled.p`
    color: #FFFFFF;
    mix-blend-mode: normal;
    position: relative;
    font-weight: 700;
    font-size: calc(12px + 2.8vw);
    margin-bottom: 3%;
    @media screen and (max-width: 600px) {
        font-size: 6vw;
    }
`

const BestParagraph = styled.p`
    color: #FFFFFF;
    font-size: 1.5vw;
    margin-bottom: 100%;
    @media screen and (max-width: 600px) {
        font-size: inherit;
        margin-bottom: 5%;
    }
`

const BestService = styled.p`
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1.5vw;
    @media screen and (max-width: 600px) {
        font-size: inherit;
    }
`

const BestBorder = styled.div`
    border: 2px solid #BE264C;
    width: 70%;
    height: 52vw;
    margin: 0 auto 15%;
    padding: 5%;
    @media screen and (max-width: 600px) {
        height: 140vw;
    }
`

const Feedback = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 15%;
    @media screen and (max-width: 600px) {
        margin-bottom: 25%;
    }
`

const FeedbackSubheading = styled.p`
   color: #BE264C;
   font-size: 2.2vw;
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
    }
`

const FeedbackItem = styled.div`
    border: 2px solid #BE264C;
    padding: 8% 8% 8%;
    position: relative;
    cursor: default;
`

const FeedbackBackground = styled.div`
    background: linear-gradient(#27151A, #121212);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 50;
    transition: 0.3s;
    ${FeedbackItem}:hover & {
        opacity: 1;
        transition: 0.3s;
    }
    @media screen and (max-width: 600px) {
        background: linear-gradient(#27151A, #000000);
    }
`

const Commas = styled.img`
    position: absolute;
    top: -11%;
    right: 0;
    width: 21%;
    z-index: 100;
`

const FeedbackText = styled.p`
    color: #FFFFFF;
    margin-bottom: 17%;
    font-size: calc(14px + 0.5vw);
    word-break: break-word;
    z-index: 100;
    position: relative;
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
    }
`

const FeedbackStars = styled.div`
    margin-bottom: 2%;
    z-index: 100;
    position: relative;
`

const Star = styled.img`
    width: 8%;
    margin-right: 2%;
`

const FeedbackName = styled.div`
    color: #FFFFFF;
    font-weight: 700;
    margin-bottom: 2%;
    z-index: 100;
    position: relative;
    font-size: calc(14px + 0.5vw);
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
    }
`

const FeedbackOccupation = styled.div`
    color: #FFFFFF;
    font-size: calc(14px + 0.5vw);
    z-index: 100;
    position: relative;
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
    }
`

const Ready = styled.a`
    margin: auto;
    max-width: 80%;
    border: 2px solid #BE264C;
    margin-bottom: 15%;
    position: relative;
    display: block;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
        background-color: #BE264C;
        transition: 0.5s;
    }
`

const ReadyContainer = styled.div`
    padding: 2% 0 0;
    overflow: hidden;
    display: block;
    text-decoration: none;
    height: 26vw;
    @media screen and (max-width: 600px) {
        height: auto;
        height: 70vw;
    }
`

const text = keyframes`
    0%{
        transform: translate(0, 0);
    }
    100%{
        transform: translate(-50%, 0);
    }
`

const textLeft = keyframes`
    0%{
        transform: translate(-50%, 0);
    }
    100%{
        transform: translate(0, 0);
    }
`

const ReadyBackground = styled.p`
    font-size: 5vw;
    font-weight: 700;
    width: max-content;
    margin: 0;
    animation: ${textLeft} 10s infinite linear;
    color: #121212;
    white-space: nowrap;
    transform: translate(-45%, 0);
    margin-bottom: 3%;
    transition: 0.5s;
    text-shadow: 1px 0 #656565, -1px 0 #656565, 0 1px #656565, 0 -1px #656565, 1px 1px #656565, -1px -1px #656565, 1px -1px #656565, -1px 1px #656565;
    @media screen and (max-width: 600px) {
        font-size: 9.3vw;
        color: #000000;
    }
    ${props => props.left && css`
        animation: ${text} 8s infinite linear;
    `}
    ${Ready}:hover & {
        color: #BE264C;
        transition: 0.5s;
        text-shadow: 1px 0 #F07A9C, -1px 0 #F07A9C, 0 1px #F07A9C, 0 -1px #F07A9C, 1px 1px #F07A9C, -1px -1px #F07A9C, 1px -1px #F07A9C, -1px 1px #F07A9C;
    }
`

const ReadyButton = styled.div`
    display: block;
    padding: 5% 8%;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 2.5vw;
    margin: auto;
    width: max-content;
    position: absolute;
    background: #121212;
    top: 50%;
    left: 50%;
    transition: 0.5s;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 600px) {
        width: 70%;
        text-align: center;
        line-height: 2;
        font-size: 6vw;
        padding: 10% 10%;
        background: #000000;
    }
    ${Ready}:hover & {
        background-color: #BE264C;
        transition: 0.5s;
    }
`

function Index() {
    useEffect(() => {
        let video = document.querySelector('#video')
        let slide = document.querySelectorAll('.sliderFirst')
        let swiper = document.querySelector('#swiper')
        let screen = document.querySelector('#screen')
        let parent = document.querySelector('#parent')
        let hidden = document.querySelector('#hidden')
        let crossVideo = document.querySelector('#crossVideo')
        let bubble = document.querySelector('#bubble')

        setInterval(function () {
            if (window.screen.width <= 600) {
                let activeSlide = document.querySelector('.swiper-slide-active')
                slide.forEach(element => element.lastChild.style.opacity = "0");
                activeSlide.lastChild.style.opacity = "1"
            } else {
                slide.forEach(element => element.lastChild.style.opacity = "1");
            }
            if (window.screen.width >= 600) {
                swiper.style.width = '100vw'
                swiper.style.transform = 'translate(-50%, 0)'
                swiper.style.position = 'relative'
                swiper.style.top = '10px'
            } else {
                swiper.style.width = '60vw'
                swiper.style.transform = 'translate(-50%, -45%)'
                swiper.style.position = 'absolute'
                swiper.style.top = '50%'
            }
        }, 1000)

        if (window.screen.width > 600) {
            screen.addEventListener("click", () => {
                document.body.style.overflow = "hidden"
                parent.style.opacity = '1'
                parent.style.zIndex = '1003'
                hidden.play()
                video.pause()
            })
        } else {
            bubble.addEventListener("click", () => {
                document.body.style.overflow = "hidden"
                parent.style.opacity = '1'
                parent.style.zIndex = '1003'
                hidden.play()
                video.pause()
            })
        }

        crossVideo.addEventListener("click", () => {
            document.body.style.overflow = "overlay"
            parent.style.opacity = '0'
            parent.style.zIndex = '-1'
            hidden.pause()
            video.play()
        })

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset
            if (currentScroll > 100) {
                if (window.screen.width > 600) {
                    video.style.width = '100vw'
                    video.style.height = '100vh'
                    video.style.top = '0'
                    video.style.left = '0'
                    screen.style.width = '100vw'
                    screen.style.height = '100vh'
                    screen.style.top = '0'
                    screen.style.left = '0'
                    video.addEventListener("transitionend", () => {
                        video.play()
                    })
                }
                screen.style.opacity = '0'
                video.play()
            }
        })
    }, [])

    return (
        <Page id="page">
            <Hero id="hero">
                <Header></Header>
                <HeroContainer>
                    <HeroSubheading>Клиент — это не цель, а стратегический партнер в достижении успеха</HeroSubheading>
                    <HeroHeading>Добивайтесь новых высот вместе с нами</HeroHeading>
                </HeroContainer>
            </Hero>
            <PresentationBlock>
                <HiddenContainer id="parent">
                    <Cross index transparent id="crossVideo">
                        <Line cross></Line>
                        <Line cross></Line>
                    </Cross>
                    <HiddenVideo id="hidden" autoplay controls>
                        <VideoSource src={presentation} type="video/mp4"></VideoSource>
                    </HiddenVideo>
                </HiddenContainer>
                <VideoBubble id='bubble'>
                    <VideoButton>Видео презентация</VideoButton>
                </VideoBubble>
                <VideoContainer id="video" autoplay muted loop>
                    <VideoSource src={presentation} type="video/mp4"></VideoSource>
                </VideoContainer>
                <VideoScreen id="screen"></VideoScreen>
                <PresentationImage id="image"></PresentationImage>
            </PresentationBlock>
            <About>
                <AboutImage></AboutImage>
                <AboutText>Одной из главных причин успеха AO-Performance является использование современных технологий и инновационных подходов в работе. Мы постоянно совершенствуем свои знания и умения, чтобы оставаться на переднем крае развития IT-отрасли.</AboutText>
                <AboutLink href="#">
                    <AboutButton>О нас</AboutButton>
                    <AboutArrows src={arrows}></AboutArrows>
                </AboutLink>
            </About>
            <Fields>
                <ThirdHeading>Четыре ключевые области. Неограниченные возможности</ThirdHeading>
                <FieldsContainer>
                    <FieldsItem href='#'>
                        <FieldsNumber>1</FieldsNumber>
                        <FieldsText>Дизайн</FieldsText>
                        <FieldsAnimation></FieldsAnimation>
                    </FieldsItem>
                    <FieldsItem href='#'>
                        <FieldsNumber>2</FieldsNumber>
                        <FieldsText>Брендинг</FieldsText>
                        <FieldsAnimation></FieldsAnimation>
                    </FieldsItem>
                    <FieldsItem href='#'>
                        <FieldsNumber>3</FieldsNumber>
                        <FieldsText>Разработка сайтов</FieldsText>
                        <FieldsAnimation></FieldsAnimation>
                    </FieldsItem>
                    <FieldsItem href='#'>
                        <FieldsNumber>4</FieldsNumber>
                        <FieldsText>Цифровой маркетинг</FieldsText>
                        <FieldsAnimation></FieldsAnimation>
                    </FieldsItem>
                </FieldsContainer>
            </Fields>
            <Best>
                <BestBorder style={{ position: "relative" }}>
                    <ThirdHeading left>Лучшие работы</ThirdHeading>
                    <Swiper id="swiper"
                        spaceBetween={"7%"}
                        centeredSlides={true}
                        initialSlide={1}
                        loopedSlides={3}
                        slidesPerView={1}
                        className="mySwiper"
                        style={{
                            width: "60vw",
                            transform: "translate(-50%, -45%)",
                            height: "auto",
                            display: "grid",
                            overflow: "visible",
                            margin: "0",
                            position: "absolute",
                            top: "50%",
                            left: "50%"
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 3,
                                enabled: false,
                                spaceBetween: "3%"
                            }
                        }}
                    >
                        <SwiperSlide style={{ position: "relative", overflow: "hidden" }} className="sliderFirst">
                            <SwiperLink href='#'></SwiperLink>
                            <BestItem src={example1}></BestItem>
                            <BestScreen className="sliderScreen"></BestScreen>
                            <BestDescription className="sliderDescription">
                                <BestName>Название</BestName>
                                <BestParagraph>короткое описание услуги с переходом на кейс</BestParagraph>
                                <BestService>Услуга</BestService>
                            </BestDescription>
                        </SwiperSlide>
                        <SwiperSlide style={{ position: "relative", overflow: "hidden" }} className="sliderFirst">
                            <SwiperLink href='#'></SwiperLink>
                            <BestItem src={example2}></BestItem>
                            <BestScreen className="sliderScreen"></BestScreen>
                            <BestDescription className="sliderDescription">
                                <BestName>Название</BestName>
                                <BestParagraph>короткое описание услуги с переходом на кейс</BestParagraph>
                                <BestService>Услуга</BestService>
                            </BestDescription>
                        </SwiperSlide>
                        <SwiperSlide style={{ position: "relative", overflow: "hidden" }} className="sliderFirst">
                            <SwiperLink href='#'></SwiperLink>
                            <BestItem src={example3}></BestItem>
                            <BestScreen className="sliderScreen"></BestScreen>
                            <BestDescription className="sliderDescription">
                                <BestName>Название</BestName>
                                <BestParagraph>короткое описание услуги с переходом на кейс</BestParagraph>
                                <BestService>Услуга</BestService>
                            </BestDescription>
                        </SwiperSlide>
                    </Swiper>
                </BestBorder>
            </Best>
            <Feedback>
                <FeedbackSubheading>Оценка 5/5</FeedbackSubheading>
                <ThirdHeading left>Отзывы наших клиентов</ThirdHeading>
                <Swiper
                    spaceBetween={"5%"}
                    initialSlide={0}
                    slidesPerView={1}
                    className="mySwiper"
                    style={{
                        width: "80vw",
                        transform: "translate(0, 10%)",
                        overflow: "visible"
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <FeedbackItem>
                            <FeedbackBackground></FeedbackBackground>
                            <Commas src={commas}></Commas>
                            <FeedbackText>оаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоыоаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоы</FeedbackText>
                            <FeedbackStars>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                            </FeedbackStars>
                            <FeedbackName>Саймон говорит</FeedbackName>
                            <FeedbackOccupation>Айти додик</FeedbackOccupation>
                        </FeedbackItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeedbackItem>
                            <FeedbackBackground></FeedbackBackground>
                            <Commas src={commas}></Commas>
                            <FeedbackText>оаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоыоаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоы</FeedbackText>
                            <FeedbackStars>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                            </FeedbackStars>
                            <FeedbackName>Саймон говорит</FeedbackName>
                            <FeedbackOccupation>Айти додик</FeedbackOccupation>
                        </FeedbackItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeedbackItem>
                            <FeedbackBackground></FeedbackBackground>
                            <Commas src={commas}></Commas>
                            <FeedbackText>оаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоыоаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоы</FeedbackText>
                            <FeedbackStars>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                            </FeedbackStars>
                            <FeedbackName>Саймон говорит</FeedbackName>
                            <FeedbackOccupation>Айти додик</FeedbackOccupation>
                        </FeedbackItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeedbackItem>
                            <FeedbackBackground></FeedbackBackground>
                            <Commas src={commas}></Commas>
                            <FeedbackText>оаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоыоаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоы</FeedbackText>
                            <FeedbackStars>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                            </FeedbackStars>
                            <FeedbackName>Саймон говорит</FeedbackName>
                            <FeedbackOccupation>Айти додик</FeedbackOccupation>
                        </FeedbackItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeedbackItem>
                            <FeedbackBackground></FeedbackBackground>
                            <Commas src={commas}></Commas>
                            <FeedbackText>оаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоыоаиоыиполыиоывиовыиолиывоивыоимловыимовыимовыимоывимодвыимолывимовимоы</FeedbackText>
                            <FeedbackStars>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                                <Star src={star}></Star>
                            </FeedbackStars>
                            <FeedbackName>Саймон говорит</FeedbackName>
                            <FeedbackOccupation>Айти додик</FeedbackOccupation>
                        </FeedbackItem>
                    </SwiperSlide>
                </Swiper>
            </Feedback>
            <Ready href="#">
                <ReadyContainer>
                    <ReadyBackground left>Готовы рассказать свою историю? Готовы рассказать свою историю?</ReadyBackground>
                    <ReadyBackground>Готовы рассказать свою историю? Готовы рассказать свою историю?</ReadyBackground>
                    <ReadyBackground left>Готовы рассказать свою историю? Готовы рассказать свою историю?</ReadyBackground>
                    <ReadyBackground>Готовы рассказать свою историю? Готовы рассказать свою историю?</ReadyBackground>
                    <ReadyBackground left>Готовы рассказать свою историю? Готовы рассказать свою историю?</ReadyBackground>
                </ReadyContainer>
                <ReadyButton>Расскажите о своем проекте</ReadyButton>
            </Ready>
            <Footer></Footer>
        </Page >
    )
}

export default Index;