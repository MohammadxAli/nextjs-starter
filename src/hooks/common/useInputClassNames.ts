import clsx from "clsx";

interface UseInputClassNames {
    color: "white" | "gray" | "lightgray";
    hasBorder: boolean;
    startAdornment: React.ReactNode;
    endAdornment: React.ReactNode;
    disabled?: boolean;
    className: string;
}

const useInputClassNames = ({
    color,
    hasBorder,
    startAdornment,
    endAdornment,
    disabled,
    className,
}: UseInputClassNames) => {
    var colorClass = "";
    switch (color) {
        case "white":
            colorClass = "bg-white";
            break;
        case "gray":
            colorClass = "bg-gray-primary";
            break;
        case "lightgray":
            colorClass = "bg-gray-secondary";
            break;
        default:
            break;
    }
    const classes = clsx(
        "py-3 px-4 w-full text-base focus:outline-none rounded-md focus:border-primary-main focus:ring-primary-main",
        hasBorder && "border-gray-300 border",
        startAdornment && "pis-12",
        endAdornment && "pie-12",
        colorClass,
        disabled && "opacity-70 select-none text-gray-800 text-opacity-50",
        className
    );
    return classes;
};

export default useInputClassNames;
