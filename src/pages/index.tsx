import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
    const translations = await serverSideTranslations(locale as string, [
        "common",
    ]);
    return {
        props: {
            ...translations,
        },
        revalidate: 60,
    };
};

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const IndexPage = (props: IndexPageProps) => {
    return <Fragment></Fragment>;
};

export default IndexPage;
