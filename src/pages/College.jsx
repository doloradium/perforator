import styled from "styled-components"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidemenu from "../components/Sidemenu"
import CaseTemplateHero from "../components/CaseTemplateHero"
import CaseTemplateItem from "../components/CaseTemplateItem"
import { HeroImage } from "../components/CaseTemplateHero"

import hero from "../img/collegeHero.jpg"
import image1 from "../img/collegeImg1.jpg"
import image2 from "../img/collegeImg2.jpg"

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

function College() {
    return (
        <Wrapper>
            <Sidemenu></Sidemenu>
            <Header></Header>
            <CaseContainer>
                <CaseTemplateHero
                    mainSubheading="Разработка landing page"
                    mainHeading="для факультета “Реклама” архитектурного техникума"
                    image={hero}
                    overview="Компания AO PERFORMANCE с гордостью представляет проект по созданию дизайна и верстки инновационного журнала Inside. Наша цель заключалась в разработке уникального, современного и привлекательного дизайна, который бы отражал дух инноваций, передовые технологии и интересные идеи в разных отраслях."
                    service1="Web-дизайн"
                    service2="Разработка"
                    service3=""
                />
                <CaseTemplateItem
                    image={image1}
                    heading='Концепция и вдохновение'
                    paragraph='Основой для концепции дизайна landing page послужила идея сочетания современного, минималистичного и функционального подхода с темной темой, яркими визуальными акцентами и креативными решениями, отражающими дух инноваций и креативности в области рекламы. Вдохновение было черпано из последних тенденций в веб-дизайне, а также из успешных примеров образовательных сайтов.'
                />
                <HeroImage single src={image2}></HeroImage>
            </CaseContainer>
            <Footer></Footer>
        </Wrapper>
    )
}

export default College;
