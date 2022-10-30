import { DaySlotUI } from "../../shared/types/modals/DaySlotUI";
import { getReadableDay } from "../../utils";
import { Slot } from "../Slot/Slot";
import "./_Day.scss";
interface DayProps {
  companyId: number;
  daySlot: DaySlotUI;
}
export const Day = ({ companyId, daySlot }: DayProps) => {
  const { slots } = daySlot;

  return (
    <div className="day" data-testid="Day">
      <div className="day__header">{getReadableDay(daySlot.day)}</div>
      <div>
        {slots.map((timeSlot, index) => (
          <Slot
            key={`company-${companyId}_${index}`}
            companyId={companyId}
            startTime={timeSlot.startTime}
            endTime={timeSlot.endTime}
          />
        ))}
      </div>
    </div>
  );
};
