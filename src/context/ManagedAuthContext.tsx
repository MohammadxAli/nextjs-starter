import React, { useState } from "react";

type Step = "send_code" | "login";

interface State {
    step: Step;
    setStep: Function;
    phone: string;
    setPhone: Function;
    user: any;
    setUser: Function;
    isLoading: boolean;
    setIsLoading: Function;
}

const initialState: State = {
    step: "send_code",
    setStep: () => {},
    phone: "",
    setPhone: () => {},
    user: null,
    setUser: () => {},
    isLoading: false,
    setIsLoading: () => {},
};

export const AuthContext = React.createContext<State>(initialState);

export const useAuthContext = () => {
    const context = React.useContext<State>(AuthContext);
    if (context === undefined) {
        throw new Error(
            `useAuthContext must be used within a AuthContext.Provider`
        );
    }
    return context;
};

interface ManagedAuthContextProps {
    children?: React.ReactNode;
}

const ManagedAuthContext = ({ children }: ManagedAuthContextProps) => {
    const [step, setStep] = useState<Step>("send_code");
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AuthContext.Provider
            value={{
                step,
                setStep,
                phone,
                setPhone,
                user,
                setUser,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default ManagedAuthContext;
