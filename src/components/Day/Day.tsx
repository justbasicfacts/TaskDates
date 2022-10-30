import { DaySlotUI } from "../../shared/types/modals/DaySlotUI";
import { getReadableDay } from "../../utils";
import { Slot } from "../Slot/Slot";
import "./_Day.scss";
interface DayProps {
  companyId: number;
  daySlot: DaySlotUI;
}
const Day = ({ companyId, daySlot }: DayProps) => {
  const { slots } = daySlot;

  return (
    <div className="day" data-testid="Day">
      <div className="day__header">{getReadableDay(daySlot.day)}</div>
      <div>
        {slots.map((timeSlot, index) => (
          <Slot
            key={companyId + index}
            companyId={companyId}
            startTime={timeSlot.startTime}
            endTime={timeSlot.endTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Day;
