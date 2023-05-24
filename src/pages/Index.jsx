import styled, { keyframes, css } from "styled-components"
import { useEffect } from 'react';

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import presentation from '../img/presentation.mp4'
import hero from '../img/hero.png'
import arrows from '../img/arrows.svg'
import example1 from '../img/example1.jpg'
import example2 from '../img/example2.jpg'
import example3 from '../img/example3.jpg'
import star from '../img/star.svg'
import commas from '../img/commas.png'

import Header from '../components/Header'
import Footer from "../components/Footer"
import SideMenu from "../components/Sidemenu"

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: #121212;
    overflow: hidden;
`

const Hero = styled.section`
    margin: auto;
    height: 100vh;
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
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
`

const VideoSource = styled.source`
    object-fit: cover;
`

const PresentationImage = styled.img`
    display: block;
    z-index: 10;
    left: calc(50vw - 7.5%);
    top: -5vw;
    position: absolute;
    width: 15%;
    height: 10vw;
`

const PresentationBlock = styled.div`
    position: relative;
`

const PresentationCircle = styled.div`

`

const PresentationText = styled.p`

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

const FieldsItem = styled.div`
    min-width: 25%;
    position: relative;
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
    background: linear-gradient(#be264c7d, #be264c33);
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -2.2%;
    transform: translate(-1000%, 0);
    transition: 0.5s;
    border: 2px solid #BE264C;
    box-sizing: border-box;
    cursor: default;
    ${FieldsItem}:hover & {
        transform: translate(0, 0);
        transition: 0.5s;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const FieldsSubtext = styled.p`
    font-size: 2vw;
    text-align: center;
    width: 60%;
    color: #121212;
    cursor: default;
    text-shadow: 1px 0 #BE264C, -1px 0 #BE264C, 0 1px #BE264C, 0 -1px #BE264C, 1px 1px #BE264C, -1px -1px #BE264C, 1px -1px #BE264C, -1px 1px #BE264C;
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
`

const FieldsText = styled.p`
    color: #BE264C;
    font-size: 2vw;
    text-align: center;
    width: min-content;
    top: 40%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 768px) {
        font-size: 30px;
        white-space: normal; 
    }
`

const Best = styled.section`
    width: 100%;
`

const BestItem = styled.img`
    width: 100%;
`

const BestDescription = styled.div`
    opacity: 1;
    transition: 0.5s;
    position: absolute;
    z-index: 100;
    background-color: #BE264C87;
    top: 0;
    left: 0;
    height: 85.4%;
    padding: 10%;
    transform: translate(-100%, 0);
    @media screen and (max-width: 600px) {
        position: relative;
        background-color: #ffffff04;
        transform: translate(0, 0);
        transition: 0.1s;
        opacity: 0;
        padding: 0;
    }
`

const BestName = styled.p`
    color: #FFFFFF;
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
    @media screen and (max-width: 600px) {
        font-size: inherit;
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
`

const Commas = styled.img`
    position: absolute;
    top: -11%;
    right: 0;
    width: 21%;
`

const FeedbackText = styled.p`
    color: #FFFFFF;
    margin-bottom: 17%;
    font-size: calc(14px + 0.5vw);
    word-break: break-word;
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
    }
`

const FeedbackStars = styled.div`
    margin-bottom: 2%;
`

const Star = styled.img`
    width: 8%;
    margin-right: 2%;
`

const FeedbackName = styled.div`
    color: #FFFFFF;
    font-weight: 700;
    margin-bottom: 2%;
    font-size: calc(14px + 0.5vw);
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
    }
`

const FeedbackOccupation = styled.div`
    color: #FFFFFF;
    font-size: calc(14px + 0.5vw);
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
        background-color: #BE264C;
        height: 70vw;
    }
`

const text = keyframes`
    0%{
        transform: translate(-10%, 0);
    }
    100%{
        transform: translate(-60%, 0);
    }
`

const textLeft = keyframes`
    0%{
        transform: translate(-60%, 0);
    }
    100%{
        transform: translate(-10%, 0);
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
        animation: none;
        text-shadow: none;
        color: #BE264C;
    }
    ${props => props.left && css`
        animation: ${text} 8s infinite linear;
    `}
    ${Ready}:hover & {
        color: #BE264C;
        transition: 0.5s;
        text-shadow: 1px 0 #F07A9C, -1px 0 #F07A9C, 0 1px #F07A9C, 0 -1px #F07A9C, 1px 1px #F07A9C, -1px -1px #F07A9C, 1px -1px #F07A9C, -1px 1px #F07A9C;
        @media screen and (max-width: 600px) {
            text-shadow: none;
        }
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
        width: 55%;
        text-align: center;
        line-height: 2;
        font-size: 5vw;
        padding: 5% 10%;
        font-size: calc(10px + 1.7vw);
    }
    ${Ready}:hover & {
        background-color: #BE264C;
        transition: 0.5s;
    }
`

function Index() {
    useEffect(() => {
        if (window.screen.height / window.screen.width > 1) {
            document.querySelector('#video').style.height = '30vh'
            document.querySelector('#hero').style.height = '70vh'
        }

        if (window.screen.width <= 600) {
            setInterval(function () {
                let activeSlide = document.querySelector('.swiper-slide-active')
                let slide = document.querySelectorAll('.sliderFirst')
                slide.forEach(element => element.lastChild.style.opacity = "0");
                activeSlide.lastChild.style.opacity = "1"
            }, 1000);
        }

        if (window.screen.width >= 600) {
            document.querySelector('#swiper').style.width = '100vw'
            document.querySelector('#swiper').style.transform = 'translate(-50%, 0)'
            document.querySelector('#swiper').style.position = 'relative'
            document.querySelector('#swiper').style.top = '10px'
        }
    }, [])

    return (
        <Page id="page">
            <Hero id="hero">
                <Header></Header>
                <SideMenu></SideMenu>
                <HeroContainer>
                    <HeroSubheading>Клиент — это не цель, а стратегический партнер в достижении успеха</HeroSubheading>
                    <HeroHeading>Добивайтесь новых высот вместе с нами</HeroHeading>
                </HeroContainer>
            </Hero>
            <PresentationBlock>
                <PresentationImage id="image" src={hero}></PresentationImage>
                <VideoContainer id="video" controls='false' autoplay>
                    <VideoSource src={presentation} type="video/mp4"></VideoSource>
                </VideoContainer>
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
                    <FieldsItem>
                        <FieldsNumber>1</FieldsNumber>
                        <FieldsText>Дизайн</FieldsText>
                        <FieldsAnimation>
                            <FieldsSubtext>
                                Дизайн
                            </FieldsSubtext>
                        </FieldsAnimation>
                    </FieldsItem>
                    <FieldsItem>
                        <FieldsNumber>2</FieldsNumber>
                        <FieldsText>Брендинг</FieldsText>
                        <FieldsAnimation>
                            <FieldsSubtext>
                                Брендинг
                            </FieldsSubtext>
                        </FieldsAnimation>
                    </FieldsItem>
                    <FieldsItem>
                        <FieldsNumber>3</FieldsNumber>
                        <FieldsText>Разработка сайтов</FieldsText>
                        <FieldsAnimation>
                            <FieldsSubtext>
                                Разработка сайтов
                            </FieldsSubtext>
                        </FieldsAnimation>
                    </FieldsItem>
                    <FieldsItem>
                        <FieldsNumber>4</FieldsNumber>
                        <FieldsText>Цифровой маркетинг</FieldsText>
                        <FieldsAnimation>
                            <FieldsSubtext>
                                Цифровой маркетинг
                            </FieldsSubtext>
                        </FieldsAnimation>
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
                        loopedSlides={1}
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
                            <BestItem src={example1}></BestItem>
                            <BestDescription className="sliderDescription">
                                <BestName>Название</BestName>
                                <BestParagraph>короткое описание услуги с переходом на кейс</BestParagraph>
                                <BestService>Услуга</BestService>
                            </BestDescription>
                        </SwiperSlide>
                        <SwiperSlide style={{ position: "relative", overflow: "hidden" }} className="sliderFirst">
                            <BestItem src={example2}></BestItem>
                            <BestDescription className="sliderDescription">
                                <BestName>Название</BestName>
                                <BestParagraph>короткое описание услуги с переходом на кейс</BestParagraph>
                                <BestService>Услуга</BestService>
                            </BestDescription>
                        </SwiperSlide>
                        <SwiperSlide style={{ position: "relative", overflow: "hidden" }} className="sliderFirst">
                            <BestItem src={example3}></BestItem>
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