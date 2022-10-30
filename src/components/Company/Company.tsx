import Day from "../Day/Day";
import { CompanyUI } from "../../shared/types/modals/CompanyUI";
import "./_Company.scss";
interface CompanyProps {
  company: CompanyUI;
}

export const Company = ({ company }: CompanyProps) => {
  return (
    <div className="company col-4">
      <div className="company-name sticky-top">{company.name}</div>
      <div className="day-list">
        {company.days.map((day, index) => (
          <Day key={day.companyId + index} daySlot={day} />
        ))}
      </div>
    </div>
  );
};
