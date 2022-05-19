import { useMemo } from "react";

interface UseFieldsProps {
    requiredAll?: boolean;
}

type UseFieldsReturnType<T> = {
    id: string;
    placeholder?: string;
    label?: string;
    name: keyof T;
    options?: string[];
    required: boolean;
    type: string | "text";
}[];

const useFields = <T extends object>(
    tObject: T,
    { requiredAll = true }: UseFieldsProps = {}
): UseFieldsReturnType<T> => {
    return useMemo(() => {
        const entries = Object.entries(tObject);
        return entries.map(
            ([key, { options, placeholder, type, required, label }]) => {
                return {
                    id: "field-" + key,
                    placeholder: placeholder ?? label,
                    label,
                    name: key as keyof T,
                    options: options,
                    required: requiredAll ? true : required,
                    type: type ?? "text",
                };
            }
        );
    }, []);
};

export default useFields;
