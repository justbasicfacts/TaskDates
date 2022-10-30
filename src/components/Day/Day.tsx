import { DaySlotUI } from "../../shared/types/modals/DaySlotUI";
import { getReadableDay } from "../../utils";
import { Slot } from "../Slot/Slot";
import "./_Day.scss";
interface DayProps {
  daySlot: DaySlotUI;
}
const Day = ({ daySlot }: DayProps) => {
  const { companyId, slots } = daySlot;

  return (
    <div className="day">
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
