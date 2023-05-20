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
    display: flex;
    justify-content: space-between;
`

const Container = styled.div`

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
    `}
`

const PagesItem = styled.a`
    text-decoration: none;
    color: #BE264C;
    font-size: 2.25vw;
    display: block;
    margin-bottom: 10%;
    ${props => props.icon && css`
        margin: 0;
    `}
`

const PagesImage = styled.img`
    width: 4.5vw;
    display: block;
`

const Privacy = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.5vw;
    display: block;
    margin-left: 4vw
`

const Paragraph = styled.p`
    color: #FFFFFF;
    font-size: 1.5vw;
`

const Mail = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.5vw;
    display: block;
    margin-bottom: 5%;
`

function Footer() {
    return (
        <Wrapper>
            <Container>
                <ThirdHeading left>AO PERFORMANCE</ThirdHeading>
                <Pages>
                    <PagesItem href="#">Контакты</PagesItem>
                    <PagesItem href="#">Команда</PagesItem>
                    <PagesItem href="#">Услуги</PagesItem>
                    <PagesItem href="#">Кейсы</PagesItem>
                    <PagesItem href="#">О нас</PagesItem>
                </Pages>
                <Mail href="mailto:aoperformance@mail.ru">aoperformance@mail.ru</Mail>
                <Paragraph>©️ 2023 AO PERFORMANCE, Все права защищены</Paragraph>
            </Container>
            <Container>
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
                <Privacy href="#">Политика конфиденциальности</Privacy>
            </Container>
        </Wrapper>
    )
}

export default Footer;