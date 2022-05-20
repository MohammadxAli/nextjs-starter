export const PHONE_REGEX =
    /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;

export const POSTAL_CODE_REGEX =
    /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/gm;

// Remember to also modify the next-18next.config.js file
export const DEFAULT_LOCALE = "fa";
