import { enUS, faIR } from "date-fns/locale";

export const getDateFnsLocaleByCode = (locale = "fa") => {
    switch (locale) {
        case "en":
            return enUS;
        default:
            return faIR;
    }
};
