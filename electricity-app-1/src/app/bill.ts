export class Bill {
  id : number = NaN
  month : months = NaN
  customerId : string = ''
  totalUnits : string = ''
  cost : number = NaN
  // private LocalDate paidDate;
  // private Boolean paid;
  paidDate : Date = new Date()
  paid : boolean = false
}

export enum months {
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
}
