import { ElementProps } from "react-html-props";
import { formatDistance, formatISO, isBefore, subDays } from "date-fns";
import { getDateFnsLocaleByCode } from "@/helpers/helpers";
import { useRouter } from "next/router";

interface Props extends ElementProps {
    date: string | number | Date;
    distanceFormat?: boolean;
}

const FormattedDate = ({ distanceFormat = true, date, ...props }: Props) => {
    const _date = new Date(date);
    const dateTime = formatISO(_date);
    const now = new Date();
    const isThreeDaysOld = isBefore(_date, subDays(now, 3));
    const { locale } = useRouter();

    let displayDate;

    if (!isThreeDaysOld && distanceFormat) {
        displayDate = formatDistance(_date, now, {
            addSuffix: true,
            locale: getDateFnsLocaleByCode(locale),
        });
    } else {
        displayDate = _date.toLocaleString(locale, {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }

    return (
        <time dateTime={dateTime} {...props}>
            {displayDate}
        </time>
    );
};

export default FormattedDate;
