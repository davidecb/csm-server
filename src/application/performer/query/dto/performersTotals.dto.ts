interface PersonalInfo {
  performerName: string;
  location: string;
  performerShift: string;
}

interface Totals {
  total: number;
  camsoda?: number;
  imlive?: number;
  livejasmin?: number;
  streamate?: number;
}

export class PerformersTotalsDto {
  public personalInfo: PersonalInfo;
  public time: Totals;
  public earnings: Totals;
}
