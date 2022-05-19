import { getRandomNumberBetween } from "@/helpers/utils";
import { useEffect, useState } from "react";

const useRandomNumber = (min: number, max: number) => {
    const [number, setNumber] = useState(max);

    useEffect(() => {
        setNumber(getRandomNumberBetween(min, max));
    }, [min, max]);

    return number;
};

export default useRandomNumber;
