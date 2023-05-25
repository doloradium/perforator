import styled, { css } from "styled-components"

import { ThirdHeading } from "../pages/Index"

import whatsapp from '../img/whatsapp.svg'
import youtube from '../img/youtube.svg'
import vk from '../img/vk.svg'
import insta from '../img/insta.svg'
import telegram from '../img/telegram.svg'

const Wrapper = styled.div`
    margin: 0 auto 3%;
    width: 80%;
    @media screen and (max-width: 600px) {
        margin-bottom: 8%;
    }
`

const Container = styled.div`
    width: 65%;
    @media screen and (max-width: 600px) {
        width: 100%;   
    }
    ${props => props.smaller && css`
        width: 35%;
    `}
`

const Pages = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2%;
    column-gap: 45%;
    width: min-content;
    ${props => props.socials && css`
        border-left: 1px solid #FFFFFF;
        padding-left: 12%;
        gap: 3.3vw;
        margin-bottom: 7.5%;
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid #FFFFFF;
            border-left: none;
            padding-left: 0;
            padding-top: 12%;
            column-gap: 8vw;
            row-gap: 6vw;
        }
    `}
`

const PagesItem = styled.a`
    text-decoration: none;
    color: #BE264C;
    font-size: 2.25vw;
    display: block;
    margin-bottom: 10%;
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
        margin-bottom: 30%;
    }
    ${props => props.icon && css`
        margin: 0;
    `}
`

const PagesImage = styled.img`
    width: 4.5vw;
    display: block;
    @media screen and (max-width: 600px) {
        width: 12vw;
    }
`

const Privacy = styled.a`
    color: #FFFFFF;
    font-size: 1.5vw;
    width: 35%;
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
        width: 100%;
    }

`

const Paragraph = styled.p`
    color: #FFFFFF;
    font-size: 1.5vw;
    margin: 0;
    width: 65%;
    @media screen and (max-width: 600px) {
        font-size: calc(10px + 1.5vw);
        width: 80%;
        margin-bottom: 7%;
    }
`

const Mail = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.5vw;
    display: block;
    margin-bottom: 5%;
    @media screen and (max-width: 600px) {
        color: #BE264C;   
        font-size: calc(10px + 1.5vw);
        margin-bottom: 7%;
    }
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const LinksContainer = styled.div`
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column-reverse;
        margin-top: 7%;
    }
`


function Footer() {
    return (
        <Wrapper>
            <TopContainer>
                <Container>
                    <ThirdHeading left>AO PERFORMANCE</ThirdHeading>
                    <LinksContainer>
                        <Pages>
                            <PagesItem href="#">Контакты</PagesItem>
                            <PagesItem href="#">Команда</PagesItem>
                            <PagesItem href="#">Услуги</PagesItem>
                            <PagesItem href="#">Кейсы</PagesItem>
                            <PagesItem href="#">О нас</PagesItem>
                        </Pages>
                        <Mail href="mailto:aoperformance@mail.ru">aoperformance@mail.ru</Mail>
                    </LinksContainer>
                </Container>
                <Container smaller>
                    <Pages socials>
                        <PagesItem icon href="#">
                            <PagesImage src={insta}></PagesImage>
                        </PagesItem>
                        <PagesItem icon href="#">
                            <PagesImage src={youtube}></PagesImage>
                        </PagesItem>
                        <PagesItem icon href="#">
                            <PagesImage src={vk}></PagesImage>
                        </PagesItem>
                        <PagesItem icon href="#">
                            <PagesImage src={telegram}></PagesImage>
                        </PagesItem>
                        <PagesItem icon href="#">
                            <PagesImage src={whatsapp}></PagesImage>
                        </PagesItem>
                    </Pages>
                </Container>
            </TopContainer>
            <BottomContainer>
                <Paragraph>©️ 2023 AO PERFORMANCE,
                    Все права защищены</Paragraph>
                <Privacy href="#">Политика конфиденциальности</Privacy>
            </BottomContainer>
        </Wrapper>
    )
}

export default Footer;