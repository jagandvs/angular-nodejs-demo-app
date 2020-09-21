export class CustomerPODetail{

    constructor(
        public CPOD_CPOM_CODE: number,
        public CPOD_I_CODE: number,
        public CPOD_UOM_CODE: number,
        public CPOD_ORD_QTY: number,
        public CPOD_RATE: number,
        public CPOD_AMT: number,
        public CPOD_STATUS: number,
        public CPOD_DISPACH: number,
        public CPOD_DESC: string,
        public CPOD_CUST_I_CODE: string,
        public CPOD_CUST_I_NAME: string,
        public CPOD_ST_CODE: number,
        public CPOD_CURR_CODE: number,

        public CPOD_WO_QTY: number,
        public CPOD_MODNO: string,

        public CPOD_AMORTRATE: number,
        public CPOD_DIEAMORTRATE: number,
        public CPOD_DISC_PER: number,
        public CPOD_DISC_AMT: number,
        public CPOD_DOC_NAME: string

    ){}
}
