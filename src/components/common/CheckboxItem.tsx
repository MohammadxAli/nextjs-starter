import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxItemProps extends CheckboxProps {
    label: string;
}

const CheckboxItem = ({ label, ...props }: CheckboxItemProps) => {
    return <FormControlLabel control={<Checkbox {...props} />} label={label} />;
};

export default CheckboxItem;
