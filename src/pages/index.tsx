import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Hero from "pageCompoenents/Home/Hero";
import Journey from "pageCompoenents/Home/Journey";
import CanHelp from "pageCompoenents/Home/CanHelp";
import Portfolio from "pageCompoenents/Home/Portfolio";
import Philosophy from "pageCompoenents/Home/Philosophy";
import Values from 'pageCompoenents/Home/Values';
import { IR2Home } from 'pageCompoenents/Home/types';
import { getDeviceType } from 'utils';

// FOR DEV
import values from "../testJsonData/homeValues.json";


const R2Home = ({ deviceType, values }: IR2Home) => {
    const { t } = useTranslation("common");
    const [resolvedDeviceType, setResolvedDeviceType] = React.useState(deviceType);

    React.useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        setResolvedDeviceType(getDeviceType(window.navigator.userAgent));
    }, []);

    return (
        <>
            <Head>
                <title>{t("seo.home.title")}</title>
                <meta name="keywords" content={t("seo.home.keywords")} />
                <meta name="description" content={t("seo.home.description")} />
            </Head>

            <Hero />
            <Values deviceType={resolvedDeviceType} values={values} />
            <Journey />
            <CanHelp />
            <Portfolio />
            <Philosophy />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
    return {
        props: {
            deviceType: "desktop",
            values: values,
            ...(await serverSideTranslations(locale, ['common', 'r2Home']))
        }
    }
}

export default R2Home;
