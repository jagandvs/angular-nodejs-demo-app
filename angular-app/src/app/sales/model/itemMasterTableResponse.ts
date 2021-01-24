export class itemMasterTableResponse {
  constructor(
    public I_CODE: number,
    public I_CODENO: string,
    public I_NAME: string,
    public I_UOM_NAME: string,
    public I_CAT_NAME: string,
    public I_CAT_CODE: number,
    public I_SUBCAT_CODE: number,
    public I_DRAW_NO: string,
    public I_SPECIFICATION: string
  ) {}
}
