import styled, { css } from "styled-components"

import { ThirdHeading } from "../pages/Index"
import { HeroHeading } from "../pages/Index"
import { HeroSubheading } from "../pages/Index"

const Hero = styled.div`
    width: 100%;
    margin: 0 auto 10%;
    @media screen and (max-width: 600px) {
        margin-top: calc(30px + 5%);
    }
`

const HeroHeading2 = styled.h4`
    color: #FFFFFF;
    font-size: calc(10px + 2.2vw);
    margin: 0 0 5%;
    padding-bottom: 5%;
    border-bottom: 1px solid #FFFFFF;
    @media screen and (max-width: 700px) {
        margin-bottom: 10%;
        padding-bottom: 10%;
    }
`

const HeroContainerTop = styled.div`
    width: 80%;
    margin: 0 auto 5%;
    ${props => props.wide && css`
        width: 80%;
    `}
    @media screen and (max-width: 768px) {
        width: 100%;
    }   
    @media screen and (max-width: 700px) {
        margin-bottom: 10%;
    }
`

export const HeroImage = styled.img`
    display: block;
    width: 100%;
    margin-bottom: 10%;
    @media screen and (max-width: 700px) {
        margin-bottom: 20%;
    }
    ${props => props.single && css`
        margin-bottom: 0;
    `}
`

const HeroContainerBottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    gap: 5vw;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

const HeroBlock = styled.div`
    @media screen and (max-width: 700px) {
        margin-bottom: 5%;
    }
    ${props => props.small && css`
        width: min-content;
    `}
`

export const HeroParagraph = styled.p`
    color: #FFFFFF;
    margin-top: 10%;
    width: 90%;
    font-size: 1.5vw;
    display: block;
    margin-bottom: 5%;
    @media screen and (max-width: 700px) {
        font-size: calc(10px + 1.5vw);
        width: 100%;
        margin-top: 0%;
    }
`

const HeroList = styled.ul`
    padding: 0;
    font-size: 1.2vw;
`

const HeroItem = styled.li`
    color: #FFFFFF;
    list-style: none;
    margin-bottom: 5%;
    font-size: 1.5vw;
    @media screen and (max-width: 700px) {
        font-size: calc(10px + 1.5vw);
    }
`

export default function CaseTemplateHero(
    { mainSubheading, mainHeading, image, overview, service1, service2, service3 }
) {
    return (
        <Hero>
            <HeroContainerTop>
                <HeroSubheading noMargin>{mainSubheading}</HeroSubheading>
                <HeroHeading wide>{mainHeading}</HeroHeading>
            </HeroContainerTop>
            <HeroImage src={image}></HeroImage>
            <HeroContainerBottom>
                <HeroBlock>
                    <ThirdHeading left>Обзор проекта</ThirdHeading>
                    <HeroParagraph>{overview}</HeroParagraph>
                </HeroBlock>
                <HeroBlock small>
                    <HeroHeading2>Предоставляемые услуги</HeroHeading2>
                    <HeroList>
                        <HeroItem>{service1}</HeroItem>
                        <HeroItem>{service2}</HeroItem>
                        <HeroItem>{service3}</HeroItem>
                    </HeroList>
                </HeroBlock>
            </HeroContainerBottom>
        </Hero>
    )
}