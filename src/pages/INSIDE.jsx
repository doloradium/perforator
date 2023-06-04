import styled from "styled-components"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidemenu from "../components/Sidemenu"
import CaseTemplateHero from "../components/CaseTemplateHero"
import CaseTemplateItem from "../components/CaseTemplateItem"
import { HeroImage } from "../components/CaseTemplateHero"

import hero from "../img/insideHero.jpg"
import image1 from "../img/insideImg1.jpg"
import image2 from "../img/insideImg2.jpg"
import image3 from "../img/insideImg3.jpg"
import image4 from "../img/insideImg4.jpg"

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

function Inside() {
    return (
        <Wrapper>
            <Sidemenu></Sidemenu>
            <Header></Header>
            <CaseContainer>
                <CaseTemplateHero
                    mainSubheading="Дизайн и вёрстка"
                    mainHeading="Инновационного журнала  ”inside”"
                    image={hero}
                    overview="Компания AO PERFORMANCE с гордостью представляет проект по созданию дизайна и верстки инновационного журнала Inside. Наша цель заключалась в разработке уникального, современного и привлекательного дизайна, который бы отражал дух инноваций, передовые технологии и интересные идеи в разных отраслях."
                    service1="Брендинг"
                    service2="Верстка"
                    service3="Разработка"
                />
                <CaseTemplateItem
                    image={image1}
                    heading='Концепция и вдохновение'
                    paragraph='Цветовая палитра брендбука архитектурного бюро ДОМЪ базируется на нейтральных и спокойных оттенках серого, бежевого и белого, которые гармонично сочетаются с яркими акцентами, подчеркивающими индивидуальность и креативность компании.'
                />
                <CaseTemplateItem
                    image={image2}
                    heading='Дизайн обложки и макета'
                    paragraph='Для обложки и макета журнала Inside мы разработали современный и стильный дизайн, который подчеркивает актуальность и прогрессивность представленных материалов. Обложка выполнена с использованием смелых цветовых решений, динамичных композиций и эффектных визуальных элементов, которые привлекают внимание читателей.'
                />
                <CaseTemplateItem
                    image={image3}
                    heading='Верстка и типографика'
                    paragraph='Для верстки журнала Inside мы использовали чистые, симметричные и уравновешенные композиции, которые обеспечивают удобное чтение и восприятие информации. Типографика сочетает в себе современные, легко читаемые шрифты с характерными особенностями, которые добавляют элегантность и изысканность.'
                />
                <HeroImage single src={image4}></HeroImage>
            </CaseContainer>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Inside;
