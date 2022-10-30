import { CompanyUI } from "../../shared/types";

export const mockCompany: CompanyUI = {
    id: 1,
    name: "company",
    days: [
      {
        day: "12/12/2022",
        slots: [
          {
            startTime: "2018-07-09T08:00:00.000+02:00",
            endTime: "2018-07-09T09:30:00.000+02:00",
          },
          {
            startTime: "2018-07-09T08:30:00.000+02:00",
            endTime: "2018-07-09T10:00:00.000+02:00",
          },
          {
            startTime: "2018-07-09T09:00:00.000+02:00",
            endTime: "2018-07-09T10:30:00.000+02:00",
          },
        ],
      },
      {
        day: "12/13/2022",
        slots: [
          {
            startTime: "2018-07-09T11:00:00.000+02:00",
            endTime: "2018-07-09T09:30:00.000+02:00",
          },
        ],
      },
    ],
  };