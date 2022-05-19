import clsx from "clsx";
import { DivProps } from "@/types/react-html-props";

interface CkEditorProps extends DivProps {
    content: string;
}

const HtmlContent = ({ content, ...props }: CkEditorProps) => {
    return (
        <div
            className={clsx("prose max-w-none")}
            dangerouslySetInnerHTML={{ __html: content }}
            {...props}
        />
    );
};

export default HtmlContent;
