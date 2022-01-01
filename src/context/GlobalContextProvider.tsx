import ManagedAuthContext from "@/context/ManagedAuthContext";
import ManagedUIContext from "@/context/ManagedUIContext";
import { FC } from "react";

const GlobalContextProvider: FC = ({ children }) => {
    return (
        <ManagedAuthContext>
            <ManagedUIContext>{children}</ManagedUIContext>
        </ManagedAuthContext>
    );
};

export default GlobalContextProvider;
