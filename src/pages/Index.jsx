<<<<<<< Updated upstream
import styled from "styled-components"

import presentation from '../img/presentation.mp4'
import hero from '../img/hero.png'
import arrows from '../img/arrows.svg'

import Header from '../components/Header'

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
`

const Hero = styled.section`
    margin: auto;
    height: 100vh;
`

const HeroContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    margin-top: calc(30vh - 200px);
`

const HeroHeading = styled.h1`
    color: #fff;
    font-size: 4vw;
    text-align: center;
    font-weight: 700px;
    padding: 0 50px;
    max-width: 1000px;
    margin: auto;
`

const HeroSubheading = styled.h2`
    color: #000;
    font-size: 3.5vw;
    text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 700px;
    padding: 0 50px;
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
    top: -170px;
    left: calc(50% - 230px);
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 460px;
    max-height: 340px;
`

const PresentationBlock = styled.div`
    position: relative;
`

const About = styled.section`
    padding: 200px 20px;    
`

const AboutImage = styled.div`
    max-width: 600px;
    width: 100%;
    height: 50vh;
    background-color: #BE264C;
    margin: 0 auto 50px;
`

const AboutText = styled.p`
    font-size: 1.5vw;
    color: #fff;
    max-width: 600px;
    margin: auto;
    text-align: center;
    margin-bottom: 50px;
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
    margin-bottom: 30px;
    transition: 0.5s;
    ${AboutLink}:hover & {
        margin-bottom: 20px;
        transition: 0.5s;
    }
`

const AboutArrows = styled.img`
    display: block;
    margin: auto;
    transition: 0.5s;
    ${AboutLink}:hover & {
        margin-bottom: 20px;
        transition: 0.5s;
    }
`

const Fields = styled.section`

`

const ThirdHeader = styled.h3`
    font-size: 4vw;
    color: #fff;
    text-align: center;
    margin: auto;
    max-width: 60%;
    margin-bottom: 50px;
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
    text-align: center;
    font-size: 20vw;
    margin: auto;
    display: block;
    text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`

const FieldsText = styled.p`
    color: #BE264C;
    font-size: 2vw;
    text-align: center;
    width: min-content;
    top: 35%;
    margin: -90% auto 90%;
`


function Index() {
    return (
        <Page>
            <Hero>
                <Header></Header>
                <HeroContainer>
                    <HeroSubheading>Клиент — это не цель, а стратегический партнер в достижении успеха</HeroSubheading>
                    <HeroHeading>Добивайтесь новых высот вместе с нами</HeroHeading>
                </HeroContainer>
            </Hero>
            <PresentationBlock>
                <PresentationImage src={hero}></PresentationImage>
                <VideoContainer controls='false' autoplay>
                    <VideoSource src={presentation} type="video/mp4"></VideoSource>
                    Your browser does not support the video tag.
                </VideoContainer>
            </PresentationBlock>
            <About>
                <AboutImage></AboutImage>
                <AboutText>Одной из главных причин успеха AO-performance является использование современных технологий и инновационных подходов в работе. Мы постоянно совершенствуем свои знания и умения, чтобы оставаться на переднем крае развития IT-отрасли.</AboutText>
                <AboutLink href="#">
                    <AboutButton>О нас</AboutButton>
                    <AboutArrows src={arrows}></AboutArrows>
                </AboutLink>
            </About>
            <Fields>
                <ThirdHeader>Четыре ключевые области. Неограниченные возможности</ThirdHeader>
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
        </Page>
    )
}

export default Index;


=======
import styled from "styled-components"

import presentation from '../img/presentation.mp4'
import hero from '../img/hero.png'
import arrows from '../img/arrows.svg'

import Header from '../components/Header'

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
`

const Hero = styled.section`
    margin: auto;
    height: 100vh;
`

const HeroContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    margin-top: calc(30vh - 200px);
`

const HeroHeading = styled.h1`
    color: #fff;
    font-size: 4vw;
    text-align: center;
    font-weight: 700px;
    padding: 0 50px;
    max-width: 1000px;
    margin: auto;
`

const HeroSubheading = styled.h2`
    color: #000;
    font-size: 3.5vw;
    text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 700px;
    padding: 0 50px;
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
    top: -170px;
    left: calc(50% - 230px);
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 460px;
    max-height: 340px;
`

const PresentationBlock = styled.div`
    position: relative;
`

const About = styled.section`
    padding: 200px 20px;    
`

const AboutImage = styled.div`
    max-width: 600px;
    width: 100%;
    height: 50vh;
    background-color: #BE264C;
    margin: 0 auto 50px;
`

const AboutText = styled.p`
    font-size: 1.5vw;
    color: #fff;
    max-width: 600px;
    margin: auto;
    text-align: center;
    margin-bottom: 50px;
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
    margin-bottom: 30px;
    transition: 0.5s;
    ${AboutLink}:hover & {
        margin-bottom: 20px;
        transition: 0.5s;
    }
`

const AboutArrows = styled.img`
    display: block;
    margin: auto;
    transition: 0.5s;
    ${AboutLink}:hover & {
        margin-bottom: 20px;
        transition: 0.5s;
    }
`

const Fields = styled.section`

`

const ThirdHeader = styled.h3`
    font-size: 4vw;
    color: #fff;
    text-align: center;
    margin: auto;
    max-width: 60%;
    margin-bottom: 50px;
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
    text-align: center;
    font-size: 20vw;
    margin: auto;
    display: block;
    text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`

const FieldsText = styled.p`
    color: #BE264C;
    font-size: 2vw;
    text-align: center;
    width: min-content;
    top: 35%;
    margin: -90% auto 90%;
`


function Index() {
    return (
        <Page>
            <Hero>
                <Header></Header>
                <HeroContainer>
                    <HeroSubheading>Клиент — это не цель, а стратегический партнер в достижении успеха</HeroSubheading>
                    <HeroHeading>Добивайтесь новых высот вместе с нами</HeroHeading>
                </HeroContainer>
            </Hero>
            <PresentationBlock>
                <PresentationImage src={hero}></PresentationImage>
                <VideoContainer controls='false' autoplay>
                    <VideoSource src={presentation} type="video/mp4"></VideoSource>
                    Your browser does not support the video tag.
                </VideoContainer>
            </PresentationBlock>
            <About>
                <AboutImage></AboutImage>
                <AboutText>Одной из главных причин успеха AO-performance является использование современных технологий и инновационных подходов в работе. Мы постоянно совершенствуем свои знания и умения, чтобы оставаться на переднем крае развития IT-отрасли.</AboutText>
                <AboutLink href="#">
                    <AboutButton>О нас</AboutButton>
                    <AboutArrows src={arrows}></AboutArrows>
                </AboutLink>
            </About>
            <Fields>
                <ThirdHeader>Четыре ключевые области. Неограниченные возможности</ThirdHeader>
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
        </Page>
    )
}

export default Index;


>>>>>>> Stashed changes
