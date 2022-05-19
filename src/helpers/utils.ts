import { enUS, faIR } from "date-fns/locale";
import { shouldUseFaker } from "@/helpers/env-variables";

export const shouldUseMock = (useMock: boolean) => {
    if (!(shouldUseFaker === "mixed")) {
        if (shouldUseFaker === true) {
            return true;
        } else {
            return false;
        }
    }
    return useMock;
};

export const getDateFnsLocaleByCode = (locale = "fa") => {
    switch (locale) {
        case "en":
            return enUS;
        default:
            return faIR;
    }
};
