import ManagedAuthContext from "@/contexts/ManagedAuthContext";
import ManagedUIContext from "@/contexts/ManagedUIContext";
import { FC } from "react";

const GlobalContextProvider: FC = ({ children }) => {
    return (
        <ManagedAuthContext>
            <ManagedUIContext>{children}</ManagedUIContext>
        </ManagedAuthContext>
    );
};

export default GlobalContextProvider;
