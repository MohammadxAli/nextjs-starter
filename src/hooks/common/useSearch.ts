import { useState } from "react";
import { useDebounce } from "use-debounce";

const useSearch = (delay: number = 350) => {
    const [value, setValue] = useState("");
    const [debouncedValue] = useDebounce(value, delay);
    return [debouncedValue, setValue] as const;
};

export default useSearch;
