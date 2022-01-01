export const formatNumber = (
    locale = "fa",
    num: string | number,
    separated = true
) => {
    if (separated && typeof num === "number") {
        return new Intl.NumberFormat(locale).format(num);
    }
    // Todo: should remove this and use Intl.NumberFormat instead
    if (locale === "fa") {
        return num.toString().replace(/\d/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹"[d]);
    }
    return num;
};
