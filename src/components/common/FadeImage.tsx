import { useState } from "react";
import clsx from "clsx";
import NextImage, { ImageProps } from "next/image";

type FadeImageProps = ImageProps & {
    fallbackSrc?: string;
    wrapperClassName?: string;
};

const FadeImage = ({
    fallbackSrc = "/media/placeholder/350x300.jpg",
    src,
    wrapperClassName = "",
    ...props
}: FadeImageProps) => {
    const [ready, setReady] = useState(false);
    const [imgSrc, setImgSrc] = useState(false);
    const [oldSrc, setOldSrc] = useState(src);
    if (oldSrc !== src) {
        setImgSrc(false);
        setOldSrc(src);
    }
    return (
        <div
            className={clsx("relative", wrapperClassName)}
            style={{
                opacity: ready ? 1 : 0,
                transition: "opacity .3s ease-in-out",
            }}
        >
            <NextImage
                src={imgSrc ? fallbackSrc : src}
                onError={() => {
                    setImgSrc(true);
                }}
                onLoad={(event) => {
                    event.persist();
                    event.currentTarget.srcset && setReady(true);
                }}
                {...props}
            />
        </div>
    );
};

export default FadeImage;
