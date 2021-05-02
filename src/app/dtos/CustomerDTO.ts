export default class CustomerDTO {
  private _customerId: string;
  private _customerName: string;
  private _customerSalary: number;
  private _customerAddress: string;


  constructor(customerId: string, customerName: string, customerSalary: number, customerAddress: string) {
    this._customerId = customerId;
    this._customerName = customerName;
    this._customerSalary = customerSalary;
    this._customerAddress = customerAddress;
  }


  get customerId(): string {
    return this._customerId;
  }

  set customerId(value: string) {
    this._customerId = value;
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }

  get customerSalary(): number {
    return this._customerSalary;
  }

  set customerSalary(value: number) {
    this._customerSalary = value;
  }

  get customerAddress(): string {
    return this._customerAddress;
  }

  set customerAddress(value: string) {
    this._customerAddress = value;
  }
}
