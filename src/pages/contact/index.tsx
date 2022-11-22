import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Hero from "pageCompoenents/Contact/Hero";
import Head from "next/head";
import Form from 'pageCompoenents/Contact/ContactForm';
import Philosophy from "pageCompoenents/Contact/Philosophy";

const R2Contact = () => {
    const { t } = useTranslation("common");

    return (
        <>
            <Head>
                <title>{t("seo.contact.title")}</title>
                <meta name="keywords" content={t("seo.contact.keywords")} />
                <meta name="description" content={t("seo.contact.description")} />
            </Head>

            <Hero />
            <Form />
            <Philosophy />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'r2Contact']))
        }
    }
}

export default R2Contact;