import React from "react"
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled from 'styled-components';

import { maxTextLength } from "utils";
import AssetsImage from "./assets";
import { IBigArticle } from "./types";
import { deviceMedia } from "common/media";
import { LazyImageWrapper } from "components/image/LazyImageWrapper";



const BigArticle: React.FC<IBigArticle> = ({ img, title, path, date, description, ...arg }) => {

    const { t } = useTranslation("r2News");

    return (
        <>
            <Article {...arg}>
                <Link href={path} legacyBehavior>
                    <a>
                        <ImageWrapper>
                            <LazyImageWrapper>
                                <Image src={img} alt={`Article image`} className="general_image" />
                            </LazyImageWrapper>
                        </ImageWrapper>
                        <Сontent>
                            <Date>{date}</Date>
                            <Title dangerouslySetInnerHTML={{ __html: title }} />
                            <Description dangerouslySetInnerHTML={{ __html: maxTextLength(description, 190) }} />
                            <ReadArticleLink>
                                <span>{t('article.btn.read')}</span>
                                <LazyImageWrapper>
                                    <img width="24" height="24" src={AssetsImage.dotArrRight} alt="arr-right"  />
                                </LazyImageWrapper>
                            </ReadArticleLink>
                        </Сontent>
                    </a>
                </Link>
            </Article>
        </>
    )
}

export default BigArticle

const Article = styled.article`
    height: 100%;
    padding: 12px;
    a {
        background: #F0F0F0;
        border: 1px solid ${props => props.theme.black};
        height: 100%;
        display: flex;
        flex-direction: column;
        ${deviceMedia.media1280} {
            flex-direction: row;
        }
        ${deviceMedia.media768} {
            flex-direction: column;
        }
    }
    &:hover {
        .general_image {
            transform: scale(1.11);
            opacity: 1;
        }
    }
`;
const ImageWrapper = styled.div`
    overflow: hidden;
    min-height: 435px;
    max-height: 600px;
    flex: 1 1 100%;
    transition: .3s ease-out;  
    position: relative;
    background: ${props => props.theme.black};
`
const Image = styled.img`
    transition: .3s ease-out;  
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .7;
    transform: scale(1);
    ${deviceMedia.media1440} {
        object-position: left;
    }
`
const Сontent = styled.div`
    flex: 1 1 50%;
    padding: 45px 33px 40px;
    display: flex;
    flex-direction: column;
    ${deviceMedia.media1280} {
        flex: 1 1 100%;
    }
    ${deviceMedia.media768} {
        flex: 1 1 50%;
    }
`
const Date = styled.strong`
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.2px;
    margin-bottom: 20px;
`
const Title = styled.h1`
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 32px;
    line-height: 38px;
    text-transform: capitalize;
    color: ${props => props.theme.black};
    margin-bottom: 20px;
`
const Description = styled.div`
    font-family: ${props => props.theme.PublicSansRegular};
    flex: 1 1 100%;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.black};
`
const ReadArticleLink = styled.div`
    padding: 46px 0 10px;
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 16px;
    line-height: 30px;
    letter-spacing: .2px;
    text-transform: uppercase;
  
    span,
    img {
        transition: .2s ease-in-out;
    }
    
    span {
        border-left: 1px solid ${props => props.theme.black};
        padding: 0 10px;
        
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, ${props => props.theme.black} 50%);
    background-size: 200% 200%;
    background-position: 0% -22px;
    }
    
    &:hover {
        span {
            // background-color: ${props => props.theme.black};
            color: ${props => props.theme.lime};
            border-radius: 2px;
            display: flex;
            background-position: -100% 100%;
        }
        
        img {
            transform: translateX(5px);
        }
    }
`;