import styled from "styled-components"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidemenu from "../components/Sidemenu"
import CaseTemplateHero from "../components/CaseTemplateHero"
import CaseTemplateItem from "../components/CaseTemplateItem"
import { HeroImage } from "../components/CaseTemplateHero"

import hero from "../img/cultHero.jpg"
import image1 from "../img/cultImg1.jpg"
import image2 from "../img/cultImg2.jpg"
import image3 from "../img/cultImg3.jpg"
import image4 from "../img/cultImg4.jpg"

const Wrapper = styled.div`
    background-color: #121212;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
        background-color: #000000;
    }
`

const CaseContainer = styled.div`
    margin: 12% auto 10%;
    width: 80%;
`

function Cult() {
    return (
        <Wrapper>
            <Sidemenu></Sidemenu>
            <Header></Header>
            <CaseContainer>
                <CaseTemplateHero
                    mainSubheading="Дизайн и вёрстка"
                    mainHeading="музыкального журнала CULT"
                    image={hero}
                    overview="Компания AO PERFORMANCE с гордостью представляет проект по созданию музыкального журнала CULT. Нашей целью было разработать креативное, стильное и привлекательное издание, предоставляющее читателям интересные и актуальные материалы о мире музыки, культурных событиях и тенденциях современной индустрии."
                    service1="Брендинг"
                    service2="Верстка"
                    service3="Разработка"
                />
                <CaseTemplateItem
                    image={image1}
                    heading='Концепция и вдохновение'
                    paragraph='Основой для концепции дизайна журнала "CULT" послужила идея сочетания эстетики музыкальной сцены с актуальными тенденциями в дизайне и искусстве. Вдохновение было черпано из различных музыкальных жанров, культурных событий и успешных примеров музыкальных изданий.'
                />
                <CaseTemplateItem
                    image={image2}
                    heading='Дизайн обложки и макета'
                    paragraph='Для обложки и макета журнала "CULT" мы разработали современный и динамичный дизайн, отражающий дух и энергию музыки. Обложка выполнена с использованием ярких цветов, эффектных композиций и выразительных фотографий, которые привлекают внимание читателей и акцентируют внимание на ключевых особенностях издания.'
                />
                <CaseTemplateItem
                    image={image3}
                    heading='Верстка и типографика'
                    paragraph='Верстка журнала "CULT" сочетает в себе чистые, уравновешенные и гармоничные композиции, обеспечивающие удобное чтение и восприятие информации. Типографика включает элегантные, легко читаемые шрифты с акцентированными элементами, добавляя изысканность и оригинальность материалам.'
                />
                <HeroImage single src={image4}></HeroImage>
            </CaseContainer>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Cult;
