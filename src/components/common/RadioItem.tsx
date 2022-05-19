import FormControlLabel from "@mui/material/FormControlLabel";
import Radio, { RadioProps } from "@mui/material/Radio";

interface RadioItemProps extends RadioProps {
    label: string;
}

const RadioItem = ({ label, value, ...props }: RadioItemProps) => {
    return (
        <FormControlLabel
            value={value}
            control={<Radio {...props} />}
            label={label}
        />
    );
};

export default RadioItem;
