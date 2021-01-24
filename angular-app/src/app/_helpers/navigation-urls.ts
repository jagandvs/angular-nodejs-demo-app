import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

export const ApiURL = environment.baseUrl;
export const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

export const login = ApiURL + "auth/signin";
export const TableResponse = ApiURL + "sales/TableResponse";
export const insertItemMaster = ApiURL + "sales/insertItemMaster";
export const updateItemMaster = ApiURL + "sales/updateItemMaster";

export const deleteTable = ApiURL + "deleteTable";
export const postBomMaster = ApiURL + "postBomMaster";
export const postBomDetail = ApiURL + "postBomDetail";
export const updateBomMaster = ApiURL + "updateBomMaster";

export const getInvoiceDetails = ApiURL + "getInvoiceDetails";
export const getCompanyDetails = ApiURL + "getCompanyDetails";
