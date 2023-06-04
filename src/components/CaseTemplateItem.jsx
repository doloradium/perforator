import styled, { css } from "styled-components"

import { ThirdHeading } from "../pages/Index"
import { HeroParagraph } from "./CaseTemplateHero"
import { HeroImage } from "./CaseTemplateHero"

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 10%;
    @media screen and (max-width: 700px) {
        margin-bottom: 20%;
    }
`

const ItemBlock = styled.div`
    width: 60%;
    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export default function CaseTemplateItem(
    { image, heading, paragraph }
) {
    return (
        <Wrapper>
            <HeroImage src={image}></HeroImage>
            <ItemBlock>
                <ThirdHeading left>{heading}</ThirdHeading>
                <HeroParagraph>{paragraph}</HeroParagraph>
            </ItemBlock>
        </Wrapper>
    )
}