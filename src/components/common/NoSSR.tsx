import dynamic from "next/dynamic";
import { Fragment, ReactNode } from "react";

interface NoSSRProps {
    children?: ReactNode;
}

const NoSSR = ({ children }: NoSSRProps) => <Fragment>{children}</Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
    ssr: false,
});
