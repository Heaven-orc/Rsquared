import { deviceMedia } from 'common/media';
import { GetServerSideProps, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AssetsImage from 'pageCompoenents/News/assets';
import ReadMoreArticles from 'pageCompoenents/News/ReadMoreArticles';
import { ISingleNewsArticle, ISocial } from 'pageCompoenents/News/types';
import styled from 'styled-components';
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

// FOR DEV
import articles from "../../testJsonData/newsArticles.json";
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

export default function SingleNewsArticle({ article, readMore }: ISingleNewsArticle) {

    const router = useRouter()
    const { t } = useTranslation("r2News");

    const socialData: ISocial[] = [
        { icon: AssetsImage.instagram, label: 'instagram' },
        { icon: AssetsImage.linkedin, label: 'linkedin' }
    ]

    const handleClickShare = async (title: string, url: string) => {
        const shareData = {
            title: title,
            url: url
        }
        await navigator.share(shareData);
    }

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 50,
            duration: 600,
            delay: 100
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <Head>
                <title>{article.title}</title>
                {/* <meta name="keywords" content={``} /> */}
                <meta name="description" content={article.description} />
            </Head>

            <Section>
                <Box>
                    <InnerContainer data-aos="fade-up">
                        <Article>
                            <Header>
                                <Content>
                                    <ButtonBack type="button" onClick={() => router.back()}>
                                        <LazyImageWrapper>
                                            <img width="24" height="24" src={AssetsImage.dotArrLeft} alt="arr-left" />
                                        </LazyImageWrapper>
                                        <span>{t('article.btn.back')}</span>
                                    </ButtonBack>
                                </Content>
                            </Header>
                            <ArticleImgTitle>
                                <ImageWrapper>
                                    <ArticleImg
                                        src={article.img}
                                        alt={`News picture ${article.title}`}
                                    />
                                </ImageWrapper>
                                <TitleWrapper>
                                    <Title dangerouslySetInnerHTML={{ __html: article.title }} />
                                    <Date>{article.date}</Date>
                                </TitleWrapper>
                            </ArticleImgTitle>
                            <Main>
                                <Content>
                                    <Description dangerouslySetInnerHTML={{ __html: article.description }} />
                                </Content>
                            </Main>
                        </Article>
                        <Footer>
                            <StyledLink href={"#"}>
                                <span>{t('article.btn.next')}</span>
                                <LazyImageWrapper>
                                    <img width="24" height="24" src={AssetsImage.dotArrRight} alt="arr-right" />
                                </LazyImageWrapper>
                            </StyledLink>
                            <Share>
                                <span>{t('article.btn.share')} :</span>
                                <SocialsGroup>
                                    {
                                        socialData.map((item, index) => (
                                            <SocialItem key={index}>
                                                <ShareSocialButton onClick={() => handleClickShare(article.title, String(window.location))} type="button">
                                                    <LazyImageWrapper>
                                                        <img width="20" height="20" src={item.icon} alt={item.label} />
                                                    </LazyImageWrapper>
                                                </ShareSocialButton>
                                            </SocialItem>
                                        ))
                                    }
                                </SocialsGroup>
                            </Share>
                        </Footer>
                    </InnerContainer>
                </Box>
            </Section>

            <ReadMoreArticles data={readMore} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = '' }) => {

    return {
        props: {
            article: articles[0],
            readMore: articles,
            ...(await serverSideTranslations(locale, ['common', 'r2News']))
        }
    }
}


const Section = styled.section`
    overflow: hidden;
    margin-top: 60px;
`;
const Box = styled.div`
    border-bottom: 1px solid ${props => props.theme.black};
`;
const InnerContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    padding: 40px 55px 87px;
    ${deviceMedia.media1440} {
        padding: 24px 20px;
        padding: 
        calc(24px + (40 - 24) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
        calc(20px + (55 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
        calc(20px + (87 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
`;
const Article = styled.div`
    background: #F0F0F0;
    border: 1px solid ${props => props.theme.black};
`;
const ArticleImgTitle = styled.div`
    width: 100%;
    height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    mix-blend-mode: darken;
`;
const ArticleImg = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: left;
    height: 100%;
`;
const TitleWrapper = styled.div`
    position: absolute;
    font-family: ${props => props.theme.PublicSansMedium};
    color: ${props => props.theme.white};
    text-align: center;
    margin: 0 30px;
`;
const Title = styled.h1`
    font-size: 40px;
    line-height: 47px;
    text-transform: capitalize;
    margin-bottom: 50px;
`;
const Date = styled.strong`
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.2px;
`;
const Header = styled.div`
    padding-top: 52px;
    padding-bottom: 55px;
`;
const Main = styled.div`
    padding-top: 84px;
    padding-bottom: 120px;
    ${deviceMedia.media1440}{
        padding-top: 51px;
        padding-bottom: 72px;
        padding-top: calc(51px + (84 - 51) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        padding-bottom: calc(72px + (120 - 72) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
`;
const Footer = styled.div`
    padding-top: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${deviceMedia.media640}{
        align-items: flex-start;
        flex-direction: column;
    }
`;
const Description = styled.div`
    font-family: ${props => props.theme.PublicSansRegular};
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.black};
    p {
        margin-bottom: 17px;
        &:last-child {
            margin-bottom: none;
        }
    }
`
const Content = styled.div`
    padding-left: 124px;
    padding-right: 124px;
    ${deviceMedia.media1440} {
        padding-left: 20px;
        padding-right: 20px;
        padding-left: calc(20px + (124 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        padding-right: calc(20px + (124 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
    ${deviceMedia.media428} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
const StyledLink = styled(Link)`
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
const ButtonBack = styled.button`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 0;
    cursor: pointer;
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
        padding: 0 10px;
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, ${props => props.theme.black} 50%);
        background-size: 200% 200%;
        background-position: 0% -22px;
    }
    
    &:hover {
        span {
            background-position: 100% 100%;
            color: ${props => props.theme.lime};
            border-radius: 2px;
            display: flex;
        }
        
        img {
            transform: translateX(-5px);
        }
    }
`;
const Share = styled.div`
    font-family: ${props => props.theme.PublicSansMedium};
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: ${props => props.theme.black};
    ${deviceMedia.media1440}{
        margin-top: 16px;
    }
`;
const SocialsGroup = styled.ul`
    display: flex;
`;

const SocialItem = styled.li`
   padding: 12px;
`;
const ShareSocialButton = styled.button`
    background: transparent;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    border: 0;
    margin: 0;
    cursor: pointer;
`;