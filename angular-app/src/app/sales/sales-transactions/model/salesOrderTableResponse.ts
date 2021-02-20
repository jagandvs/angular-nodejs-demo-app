export class SalesOrderTableResponse {
  constructor(
    public CPOD_CUST_I_CODE: number,
    public CPOM_AM_COUNT: number,
    public CPOM_CODE: number,
    public CPOM_DATE: Date,
    public CPOM_PONO: string,
    public CPOM_WORK_ODR_NO: string,
    public P_NAME: string
  ) {}
}
