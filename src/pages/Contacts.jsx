import styled, { css } from "styled-components"
import { useEffect } from 'react'
import Checkbox from "react-custom-checkbox"
import * as Icon from "react-icons/fi"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidemenu from "../components/Sidemenu"

import { ThirdHeading } from "./Index"

const Wrapper = styled.div`
    background-color: #121212;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
        background-color: #000000;
    }
`

const ContactsSection = styled.div`
    display: flex;
    margin: 12% auto 10%;
    width: 80%;
    gap: 7vw;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        margin: calc(100px + 3vw) auto 10%;
    }
`

const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: 100%;
    }
    ${props => props.bigger && css`
        width: 55%;
    `}
    ${props => props.smaller && css`
        width: 45%;
    `}
`

const ContactsLink = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    margin-bottom: 5%;
    display: block;
    width: fit-content;
    font-size: 1vw;
    @media screen and (max-width: 800px) {
        font-size: calc(10px + 1.5vw);
    }
    ${props => props.underlined && css`
        text-decoration: underline;
    `}
`

const ContactsParagraph = styled.p`
    color: #FFFFFF; 
    line-height: 1.5;
    margin: 0 0 15%;
    font-size: 1.3vw;
    @media screen and (max-width: 800px) {
        font-size: calc(10px + 1.5vw);
    }
`

const ContactsBlock = styled.div`
    display: grid;
    gap: 5%;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 0;
    }
`

const ContactsItem = styled.div`
   @media screen and (max-width: 800px) {
        margin-bottom: 5%;
    }
`

const ContactsSubtext = styled.p`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1vw;
    @media screen and (max-width: 800px) {
        font-size: calc(10px + 1.5vw);
    }
`

const ContactsInput = styled.input`
    width: 100%;
    height: 3vw;
    padding: 0 15px; 
    box-sizing: border-box;
    background-color: #303030;
    border: 2px solid #262626;
    margin-bottom: 3%;
    @media screen and (max-width: 800px) {
        height: calc(20px + 5vw);
        margin-bottom: 0;
    }
`

const ContactsTextarea = styled.input`
    width: 100%;
    height: 5vw;
    background-color: #303030;
    border: 2px solid #262626;
    @media screen and (max-width: 800px) {
        height: calc(60px + 5vw);
    }
`

const CheckboxParagraph = styled.p`
    color: #FFFFFF;
    margin: -0.5% 0 0;
    font-size: 1vw;
    @media screen and (max-width: 800px) {
        font-size: calc(6px + 1.5vw);
    }
`

const ContactsButton = styled.button`
    display: block;
    width: fit-content;
    border: none;
    background: transparent;
    color: #BE264C;
    font-family: Montserrat, 'sans-serif';
    font-size: 2vw;
    margin: 0 0 0 auto;
    font-weight: 700;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        font-size: calc(15px + 1.5vw);
    }
`

const CheckboxContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 1vw;
    margin: 5% 0;
    @media screen and (max-width: 800px) {
        gap: 3vw;
    }
`

function Contacts() {
    useEffect(() => {
    }, [])

    return (
        <Wrapper>
            <Sidemenu></Sidemenu>
            <Header></Header>
            <ContactsSection>
                <ContactsContainer smaller>
                    <ThirdHeading left>Мы хотели бы услышать вашу историю</ThirdHeading>
                    <ContactsParagraph>Желаете момента "И жили долго и счастливо"? Мы с радостью выслушаем вашу историю и поможем вам поделиться ей с миром</ContactsParagraph>
                    <ContactsLink href="tel:+79181285494" underlined>+7 (918) 128-54-94</ContactsLink>
                    <ContactsLink href="mailto:aoperformance@mail.ru">aoperformance@mail.ru</ContactsLink>
                </ContactsContainer>
                <ContactsContainer bigger>
                    <ContactsBlock>
                        <ContactsItem>
                            <ContactsSubtext>Имя</ContactsSubtext>
                            <ContactsInput></ContactsInput>
                        </ContactsItem>
                        <ContactsItem>
                            <ContactsSubtext>Фамилия</ContactsSubtext>
                            <ContactsInput></ContactsInput>
                        </ContactsItem>
                    </ContactsBlock>
                    <ContactsItem>
                        <ContactsSubtext>Электронная почта</ContactsSubtext>
                        <ContactsInput></ContactsInput>
                    </ContactsItem>
                    <ContactsBlock>
                        <ContactsItem>
                            <ContactsSubtext>Номер телефона</ContactsSubtext>
                            <ContactsInput></ContactsInput>
                        </ContactsItem>
                        <ContactsItem>
                            <ContactsSubtext>Название компании</ContactsSubtext>
                            <ContactsInput></ContactsInput>
                        </ContactsItem>
                    </ContactsBlock>
                    <ContactsItem>
                        <ContactsSubtext>Сообщение</ContactsSubtext>
                        <ContactsTextarea></ContactsTextarea>
                    </ContactsItem>
                    <CheckboxContainer>
                        <Checkbox
                            borderColor="#FFFFFF"
                            borderRadius="0"
                            size="calc(13px + 0.7vw)"
                            icon={<Icon.FiCheck color="#FFFFFF" size={20} />}
                        />
                        <CheckboxParagraph>Устанавливая этот флажок, вы соглашаетесь на то, что с вами будут связываться по телефону и электронной почте относительно вашего интереса к нашим продуктам и услугам. Мы будем обрабатывать ваши данные в соответствии с нашей политикой конфиденциальности</CheckboxParagraph>
                    </CheckboxContainer>
                    <ContactsButton>Отправить</ContactsButton>
                </ContactsContainer>
            </ContactsSection>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Contacts;
