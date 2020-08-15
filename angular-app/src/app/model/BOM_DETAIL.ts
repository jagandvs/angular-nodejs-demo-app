export class BOM_DETAIL {
    constructor(
        public BD_BM_CODE: number,
        public BD_I_CODE: number,
        public BD_VQTY: number,
        public ES_DELETE: boolean,
        public BD_SCRAPQTY: number
    ) { }
}