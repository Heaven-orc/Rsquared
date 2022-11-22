import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import Link from "next/link";
import { deviceMedia } from "../../common/media";
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

const Question = () => {
    const { t } = useTranslation('r2Portfolio');

    return (
        <Section>
            <PageContainer>
                <QuesBlock>
                    <QuesBlockContent data-aos="fade-left">
                        <p>{t("quest.block.title")}</p>
                        <StyledLink href='/contact' target="_self">
                            <span>{t('contact.btn')}</span>
                            <LazyImageWrapper>
                                <img width="24" height="24" src={AssetsImage.dorArrRight} alt="arr-right" />
                            </LazyImageWrapper>
                        </StyledLink>
                    </QuesBlockContent>
                </QuesBlock>
            </PageContainer>
        </Section>
    );
}

export default Question;

const Section = styled.section`
    border-top: 1px solid ${props => props.theme.black};
    overflow: hidden;
`;

const PageContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    padding: 0 55px 0 47px;
    margin: 0 auto;
    display: flex;
    position: relative;
    
    &:before {
        content: '';
        max-width: 587px;
        width: 100%;
        position: relative;
        
        ${deviceMedia.media998} {
            width: 55%;
        }
        
        ${deviceMedia.media768} {
            content: none;
        }
    
`;

const QuesBlock = styled.div`
    max-width: 759px;
    width: 100%;
    margin-left: auto;
    border-left: 1px solid ${props => props.theme.black};
    padding: 48px 0;
    display: flex;
    justify-content: flex-end;
    padding-left: 55px;
    background-color: #f8f9fd;
    
    ${deviceMedia.media768} {
        justify-content: center;
        padding: 45px 0;
        border: none;
    }
`;

const QuesBlockContent = styled.div`
    display: flex;
    align-items: center;
    
    ${deviceMedia.media768} {
        flex-direction: column;
    }
    
    p {
        font-family: ${props => props.theme.PublicSansBold};
        font-size: 24px;
        line-height: 28px;
        text-transform: capitalize;
        margin-right: 7px;
        margin-top: -3px;
        
        ${deviceMedia.media768} {
            margin-bottom: 7px;
            margin-right: 0;
        }
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 16px;
    line-height: 30px;
    letter-spacing: .2px;
    text-transform: uppercase;
    width: 184px;
  
    span,
    img {
        transition: .2s ease-in-out;
    }
    
    span {
        border-left: 1px solid ${props => props.theme.black};
        padding: 0 10px;
        padding-top: 2px;
        z-index: 0;
        position: relative;
        width: 100%;
            
        &:before {
            content: '';
            position: absolute;
            z-index:-1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${props => props.theme.black};
            transform: scaleX(0);
            transform-origin: 0 50%;
            transition: transform .2s ease-in-out;
        }
    }
    
    img {
        margin-left: auto;
    }
    
    &:hover {
        span {
            color: ${props => props.theme.lime};
            border-radius: 2px;
            display: flex;
            
            &:before {
                transform: scaleX(1);
            }
        }
        
        img {
            transform: translateX(5px);
        }
    }
`;