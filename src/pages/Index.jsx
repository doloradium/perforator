import styled, { css } from "styled-components"
import { useEffect } from 'react';

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

//если высота делить на ширину меньше единицы, то кидается медиа

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

const About = styled.section`
    padding: 15% 3%;    
`

const AboutImage = styled.div`
    max-width: 450px;
    width: 30%;
    max-height: 600px;
    height: 40vw;
    background-color: #BE264C;
    margin: 0 auto 3%;
`

const AboutText = styled.p`
    font-size: 1.5vw;
    color: #fff;
    max-width: 30%;
    margin: auto;
    text-align: center;
    margin-bottom: 3%;
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
    font-size: 2vw;
    font-weight: 700;
    margin-bottom: 30%;
    transition: 0.5s;
    text-align: center;
    ${AboutLink}:hover & {
        margin-bottom: 20%;
        transition: 0.5s;
    }
`

const AboutArrows = styled.img`
    display: block;
    margin: 0 auto;
    transition: 0.5s;
    padding: 0 30%;
    ${AboutLink}:hover & {
        margin-bottom: 10%;
        transition: 0.5s;
    }
`

const Fields = styled.section`

`

export const ThirdHeading = styled.h3`
    font-size: 4vw;
    color: #fff;
    text-align: center;
    margin: auto;
    max-width: 60%;
    margin-bottom: 5%;
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
    margin: auto;
`

const FieldsItem = styled.div`
    width: 20%;
`

const FieldsNumber = styled.div`
    font-family: 'Bebas Neue', cursive;
    color: #121212;
    text-align: center;
    font-size: 20vw;
    margin: auto;
    display: block;
    text-shadow: 1px 0 #FFFFFF, -1px 0 #FFFFFF, 0 1px #FFFFFF, 0 -1px #FFFFFF, 1px 1px #FFFFFF, -1px -1px #FFFFFF, 1px -1px #FFFFFF, -1px 1px #FFFFFF;
`

const FieldsText = styled.p`
    color: #BE264C;
    font-size: 2vw;
    text-align: center;
    width: min-content;
    top: 35%;
    margin: -90% auto 90%;
`

const Best = styled.section`
    width: 100%;
`

const BestContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
`

const BestItem = styled.img`
    width: 30%;
`

const BestBorder = styled.div`
    border: 2px solid #BE264C;
    width: 70%;
    height: 50vw;
    margin: 0 auto 15%;
    padding: 5%;
`

const Feedback = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 15%;
`

const FeedbackSubheading = styled.p`
   color: #BE264C;
   font-size: 2.2vw;
`

const FeedbackContainer = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    gap: 4%;
    margin-top: 10%;
`

const FeedbackItem = styled.div`
    border: 2px solid #BE264C;
    padding: 4% 2% 2%;
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
    font-size: 1.9vw;
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
    font-size: 1.5vw;
`

const FeedbackOccupation = styled.div`
    color: #FFFFFF;
    font-size: 1.5vw;
`

const Ready = styled.section`
    margin: auto;
    max-width: 80%;
    border: 2px solid #BE264C;
    margin-bottom: 15%;
    position: relative;
`

const ReadyContainer = styled.div`
    padding: 2% 0 0;
    overflow: hidden;
`

const ReadyBackground = styled.p`
    font-size: 5vw;
    font-weight: 700;
    width: max-content;
    margin: 0;
    color: #121212;
    transform: translate(-45%, 0);
    margin-bottom: 3%;
    text-shadow: 1px 0 #656565, -1px 0 #656565, 0 1px #656565, 0 -1px #656565, 1px 1px #656565, -1px -1px #656565, 1px -1px #656565, -1px 1px #656565;
    ${props => props.left && css`
        transform: translate(-30%, 0);
    `}
`

const ReadyButton = styled.a`
    display: block;
    padding: 5% 8%;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 2.5vw;
    text-decoration: none;
    margin: auto;
    width: max-content;
    position: absolute;
    background: #121212;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

function Index() {
    useEffect(() => {
        if (window.screen.height / window.screen.width > 1) {
            document.querySelector('#video').style.height = '30vh'
            document.querySelector('#hero').style.height = '70vh'
        }
    }, [])

    return (
        <Page>
            <Hero id="hero">
                <Header></Header>
                <HeroContainer>
                    <HeroSubheading>Клиент — это не цель, а стратегический партнер в достижении успеха</HeroSubheading>
                    <HeroHeading>Добивайтесь новых высот вместе с нами</HeroHeading>
                </HeroContainer>
            </Hero>
            <PresentationBlock>
                <PresentationImage src={hero}></PresentationImage>
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
                    </FieldsItem>
                    <FieldsItem>
                        <FieldsNumber>2</FieldsNumber>
                        <FieldsText>Брендинг</FieldsText>
                    </FieldsItem>
                    <FieldsItem>
                        <FieldsNumber>3</FieldsNumber>
                        <FieldsText>Разработка сайтов</FieldsText>
                    </FieldsItem>
                    <FieldsItem>
                        <FieldsNumber>4</FieldsNumber>
                        <FieldsText>Цифровой маркетинг</FieldsText>
                    </FieldsItem>
                </FieldsContainer>
            </Fields>
            <Best>
                <BestBorder>
                    <ThirdHeading left>Лучшие работы</ThirdHeading>
                    <BestContainer>
                        <BestItem src={example1}></BestItem>
                        <BestItem src={example2}></BestItem>
                        <BestItem src={example3}></BestItem>
                    </BestContainer>
                </BestBorder>
            </Best>
            <Feedback>
                <FeedbackSubheading>Оценка 5/5</FeedbackSubheading>
                <ThirdHeading left>Отзывы наших клиентов</ThirdHeading>
                <FeedbackContainer>
                    <FeedbackItem>
                        <Commas src={commas}></Commas>
                        <FeedbackText>оаиоыиполыиоывиовыиоли
                            ывоивыоимловыимовыимов
                            ыимоывимодвыимолывимовимоы
                            вимоывиомывиомиывомиывомывм
                            оывимловыимолывимоыивомом
                            пвапвапвапвапвп ыомоымоыио
                        </FeedbackText>
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
                    <FeedbackItem>
                        <Commas src={commas}></Commas>
                        <FeedbackText>оаиоыиполыиоывиовыиоли
                            ывоивыоимловыимовыимов
                            ыимоывимодвыимолывимовимоы
                            вимоывиомывиомиывомиывомывм
                            оывимловыимолывимоыивомом
                            пвапвапвапвапвп ыомоымоыио
                        </FeedbackText>
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
                    <FeedbackItem>
                        <Commas src={commas}></Commas>
                        <FeedbackText>оаиоыиполыиоывиовыиоли
                            ывоивыоимловыимовыимов
                            ыимоывимодвыимолывимовимоы
                            вимоывиомывиомиывомиывомывм
                            оывимловыимолывимоыивомом
                            пвапвапвапвапвп ыомоымоыио
                        </FeedbackText>
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
                </FeedbackContainer>
            </Feedback>
            <Ready>
                <ReadyContainer>
                    <ReadyBackground left>Готовы рассказать свою историю? Готовы рассказать свою историю? </ReadyBackground>
                    <ReadyBackground>Готовы рассказать свою историю? Готовы рассказать свою историю? </ReadyBackground>
                    <ReadyBackground left>Готовы рассказать свою историю? Готовы рассказать свою историю? </ReadyBackground>
                </ReadyContainer>
                <ReadyButton href="#">Расскажите о своем проекте</ReadyButton>
            </Ready>
            <Footer></Footer>
        </Page>
    )
}

export default Index;