interface UseFilterProps<T> {
    filter: string;
    data?: T[];
    excludeFields?: string[];
    includeFields?: string[];
}

const hasText = (item: any, key: string, text: string) => {
    return JSON.stringify(item[key])?.toLowerCase().includes(text);
};

const filterByFields = <T>(
    data: T[],
    fields: string[],
    text: string,
    shouldInclude: boolean
) => {
    return data.filter((item: any) =>
        Object.keys(item).some((key) => {
            const fieldExist = fields.includes(key);
            const textExist = hasText(item, key, text);
            if (shouldInclude) {
                return fieldExist ? textExist : false;
            }
            return fieldExist ? false : textExist;
        })
    );
};

const useFilter = <T>({
    filter = "",
    data = [],
    excludeFields = [],
    includeFields,
}: UseFilterProps<T>) => {
    const lowercaseFilter = filter.toLowerCase().trim();
    let fields = excludeFields;
    let shouldInclude = false;
    if (includeFields) {
        fields = includeFields;
        shouldInclude = true;
    }
    return filterByFields<T>(data, fields, lowercaseFilter, shouldInclude);
};

export default useFilter;
