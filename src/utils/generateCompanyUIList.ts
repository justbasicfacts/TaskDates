import { Company } from "../shared/types";
import { CompanyUI } from "../shared/types/models/CompanyUI";
import { DaySlotUI } from "../shared/types/models/DaySlotUI";
import { getFormattedDate } from "./getFormattedDate";


export const generateCompanyUIList = (payload: Company[]) => {
    const companyUIList = [] as CompanyUI[];
    payload.forEach((company) => {
        const daySlots = [] as DaySlotUI[];

        company.time_slots?.forEach((timeSlot) => {
            const { start_time, end_time } = timeSlot;
            const timeSlotForUI = { startTime: start_time, endTime: end_time };
            const uniqueDate = getFormattedDate(timeSlot.start_time);
            const foundDaySlot = daySlots.find(
                (daySlot) => daySlot.day === uniqueDate
            );
            if (!foundDaySlot) {
                daySlots.push({
                    day: uniqueDate,
                    slots: [timeSlotForUI],
                });
            } else {
                foundDaySlot.slots = [...foundDaySlot.slots, timeSlotForUI];
            }
        });

        companyUIList.push({ id: company.id, name: company.name, days: daySlots });
    });
    return companyUIList;
};
