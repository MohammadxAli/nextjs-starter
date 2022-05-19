import { createContext, useContext } from "react";

interface State {}

const initialState: State = {};

const UIContext = createContext<State>(initialState);

UIContext.displayName = "UIContext";

export const useUIContext = () => {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error(
            `useUIContext must be used within a UIContext.Provider`
        );
    }
    return context;
};

interface ManagedUIContextProps {
    children?: React.ReactNode;
}

const ManagedUIContext = ({ children }: ManagedUIContextProps) => {
    return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};

export default ManagedUIContext;
