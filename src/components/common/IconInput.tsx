import BaseInput, { BaseInputProps } from "@/components/common/BaseInput";
import React from "react";

interface Props extends BaseInputProps {
    icon: React.ReactNode;
    ref: any;
}

const IconInput = React.forwardRef(
    ({ icon, ...props }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
        return (
            <div className="relative w-full">
                <div
                    className="absolute z-10 flex items-center justify-center transform -translate-y-1/2 bg-white rounded-md rounded-ie-none w-11 top-1/2 inline-start-[2px] lg:inline-start-px"
                    style={{ height: `calc(100% - 3px)` }}
                >
                    {icon}
                </div>
                <BaseInput
                    color="gray"
                    className="!pis-14"
                    {...props}
                    ref={ref}
                />
            </div>
        );
    }
);

IconInput.displayName = "IconInput";

export default IconInput;
