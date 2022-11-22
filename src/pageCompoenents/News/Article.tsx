import { LazyImageWrapper } from "components/image/LazyImageWrapper";
import Link from "next/link";
import React from "react"
import styled from 'styled-components';

interface IArticle extends React.HTMLAttributes<HTMLElement> {
    img: string
    title: string
    path: string
}

const Article: React.FC<IArticle> = ({ img, title, path, ...arg }) => {

    return (
        <>
            <ArticleWrapper  {...arg} >
                <ArticleComp >
                    <LazyImageWrapper>
                        <Image src={img} alt={`image for article`} />
                    </LazyImageWrapper>
                    <Link href={path} legacyBehavior>
                        <Container>
                            <TitleWrapper>
                                <Title dangerouslySetInnerHTML={{ __html: title }} />
                            </TitleWrapper>
                        </Container>
                    </Link>
                </ArticleComp>
            </ArticleWrapper>
        </>
    )
}

export default Article



const Container = styled.a`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: background 0.5s ease;
    position: relative;
    z-index:1;
    background: rgba(0, 0, 0, 0.29);
`
const TitleWrapper = styled.div`
    width: 100%;
    background: linear-gradient(0deg, ${props => props.theme.magenta} 0%, ${props => props.theme.magenta} 50%, rgba(255, 255, 255, 0) 50%);
    background-size: 100% 200%;
    background-position: 0% -22px;
    transition: background-position 0.5s ease;
    padding: 20px 16px ;
`
const Title = styled.h3`
    font-family: ${props => props.theme.PublicSansSemiBold};
    color: ${props => props.theme.white};
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-transform: capitalize;
`

const ArticleWrapper = styled.div`
    height: 100%;
    padding: 12px;
`;

const ArticleComp = styled.article`
    overflow: hidden;
    height: 100%;
    position: relative;
    cursor: pointer;
    min-width: 220px;
    max-width: 570px;
    min-height: 400px;
    border: 1px solid ${props => props.theme.black};
    transition: .5s ease-out;
    &:hover {
        ${Container} {
            background: rgba(0, 0, 0, 0);
        }
        ${TitleWrapper} {
            background-position: 0% 100%;
        }
        img {
            transform: scale(1.06);
        }
    }
`;
const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1);
    transition: .3s ease-out;
`;
