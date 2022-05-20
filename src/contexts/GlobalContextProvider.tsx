import ManagedAuthContext from "@/contexts/ManagedAuthContext";
import ManagedUIContext from "@/contexts/ManagedUIContext";
import { DEFAULT_LOCALE } from "@/helpers/constants";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

interface GlobalContextProviderProps {
    children?: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const { locale = DEFAULT_LOCALE } = useRouter();
    return (
        <IntlProvider locale={locale} defaultLocale={DEFAULT_LOCALE}>
            <ManagedAuthContext>
                <ManagedUIContext>{children}</ManagedUIContext>
            </ManagedAuthContext>
        </IntlProvider>
    );
};

export default GlobalContextProvider;
