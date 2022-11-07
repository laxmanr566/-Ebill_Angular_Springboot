export class Customer {
  // private Long id;
	// private String firstName;
	// private String lastName;
	// private CustomerTypes type;
	// private String areaCode;

  id : number = NaN;
  firstName : string = ""
  lastName : string = ""
  type: CustomerTypes = 0;
  areaCode : string = ""
}

export enum CustomerTypes  {
  'INDUSTRIAL' = 0,
  'COMMERCIAL',
  'RESIDENTIAL'
}
