import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export { default } from "@/components/pages/HomePage";
