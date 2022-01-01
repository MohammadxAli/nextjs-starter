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
