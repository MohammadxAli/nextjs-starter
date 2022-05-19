import createEmotionCache from "@/theme/createEmotionCache";
import { EmotionCache } from "@emotion/cache";
import { isRtlLang } from "rtl-detect";

const useEmotionCache = (locale: string, emotionCache?: EmotionCache) => {
    const isRTL = isRtlLang(locale);
    return emotionCache ? emotionCache : createEmotionCache(isRTL);
};

export default useEmotionCache;
