import ManagedAuthContext from "@/contexts/ManagedAuthContext";
import ManagedUIContext from "@/contexts/ManagedUIContext";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

interface GlobalContextProviderProps {
    children?: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const { locale = "fa" } = useRouter();
    return (
        <IntlProvider locale={locale} defaultLocale="fa">
            <ManagedAuthContext>
                <ManagedUIContext>{children}</ManagedUIContext>
            </ManagedAuthContext>
        </IntlProvider>
    );
};

export default GlobalContextProvider;
