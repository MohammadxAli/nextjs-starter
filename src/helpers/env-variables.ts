let inDevEnvironment = false;
let shouldUseFaker: "mixed" | boolean = false;

if (process) {
    if (process.env.NODE_ENV === "development") {
        inDevEnvironment = true;
    }
    if (process.env.NEXT_PUBLIC_FAKER_TYPE === "yes") {
        shouldUseFaker = true;
    }
    if (process.env.NEXT_PUBLIC_FAKER_TYPE === "mixed") {
        shouldUseFaker = "mixed";
    }
}

const mainUrl = process.env.NEXT_PUBLIC_BASE_SERVER_API_URL;
const mockUrl = process.env.NEXT_PUBLIC_MOCK_SERVER_API_URL;

export { shouldUseFaker, inDevEnvironment, mainUrl, mockUrl };
