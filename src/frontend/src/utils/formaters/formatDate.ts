import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

export const formatDate = (
  date?: string | Date | Dayjs,
  format = "DD/MM/YYYY"
) => {
  if (!date) return "-";
  return dayjs(date).format(format);
};

export const formatFullDayAndMonth = (date?: string | Date | null) => {
  if (!date) return "-";
  return dayjs(date).format("dddd , DD [de] MMMM");
};
