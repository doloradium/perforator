import styled from "styled-components"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidemenu from "../components/Sidemenu"
import CaseTemplateHero from "../components/CaseTemplateHero"
import CaseTemplateItem from "../components/CaseTemplateItem"
import { HeroImage } from "../components/CaseTemplateHero"

import hero from "../img/plantsHero.jpg"
import image1 from "../img/plantsImg1.jpg"
import image2 from "../img/plantsImg2.jpg"
import image3 from "../img/plantsImg3.jpg"
import image4 from "../img/plantsImg4.jpg"

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

function Plants() {
    return (
        <Wrapper>
            <Sidemenu></Sidemenu>
            <Header></Header>
            <CaseContainer>
                <CaseTemplateHero
                    mainSubheading="Дизайн и вёрстка"
                    mainHeading="журнала на тему 
                    флористики ”PLANTS”"
                    image={hero}
                    overview="Компания AO PERFORMANCE с гордостью представляет проект по созданию флористического журнала PLANTS. Наша цель заключалась в разработке уникального, креативного и привлекательного издания, которое бы предоставляло читателям интересные и полезные материалы о мире растений, ландшафтном дизайне, декоре и садоводстве."
                    service1="Брендинг"
                    service2="Верстка"
                    service3="Разработка"
                />
                <CaseTemplateItem
                    image={image1}
                    heading='Концепция и вдохновение'
                    paragraph='Основой для концепции дизайна журнала "PLANTS" послужила идея гармоничного сочетания природы и искусства, с использованием креативных и свежих визуальных решений. Мы черпали вдохновение из разнообразных источников, включая современные тенденции в области флористики, ландшафтного дизайна и искусства.'
                />
                <CaseTemplateItem
                    image={image2}
                    heading='Дизайн обложки и макета'
                    paragraph='Для обложки и макета журнала "PLANTS" мы разработали стильный и современный дизайн, который подчеркивает богатство и разнообразие растительного мира. Обложка выполнена с использованием ярких цветов, эффектных композиций и выразительных фотографий, которые привлекают внимание читателей'
                />
                <CaseTemplateItem
                    image={image3}
                    heading='Верстка и типографика'
                    paragraph='Для верстки журнала "PLANTS" мы использовали чистые, уравновешенные и гармоничные композиции, обеспечивающие удобное чтение и восприятие информации. Типографика сочетает в себе элегантные, легко читаемые шрифты с акцентированными элементами, добавляя изысканность и свежесть материалам.'
                />
                <HeroImage single src={image4}></HeroImage>
            </CaseContainer>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Plants;
