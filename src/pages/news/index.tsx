import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Hero from "pageCompoenents/News/Hero";
import Head from "next/head";
import ReadMoreArticles from 'pageCompoenents/News/ReadMoreArticles';
import { INews } from 'pageCompoenents/News/types';
import GeneralArticles from 'pageCompoenents/News/GeneralArticles';

// FOR DEV
import articles from "../../testJsonData/newsArticles.json";

const R2News = ({ news }: INews) => {
    const { t } = useTranslation("common");

    const needToSplit = news.length > 5
    const generalNews = needToSplit ? new Array(...news).splice(0, 5) : news
    const newsForReadMore = needToSplit ? new Array(...news).slice(generalNews.length, news.length) : []

    return (
        <>
            <Head>
                <title>{t("seo.news.title")}</title>
                <meta name="keywords" content={t("seo.news.keywords")} />
                <meta name="description" content={t("seo.news.description")} />
            </Head>

            <Hero />
            <GeneralArticles data={generalNews} />
            <ReadMoreArticles data={newsForReadMore} />
        </>
    )
}



export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {

    return {
        props: {
            news: articles,
            ...(await serverSideTranslations(locale, ['common', 'r2News']))
        }
    }
}


export default R2News;