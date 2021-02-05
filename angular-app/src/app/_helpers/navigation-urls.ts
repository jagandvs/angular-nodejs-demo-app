import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

export const ApiURL = environment.baseUrl;
export const httpLogin = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

export const httpOptions = {
  headers: new HttpHeaders({ logger: localStorage.getItem("currentUser") }),
};

// Administrator routes

export const userMaster = ApiURL + "administrator/userMaster";
export const getModule = ApiURL + "administrator/getModule";
export const getScreen = ApiURL + "administrator/getScreen";
export const userRight = ApiURL + "administrator/userRight";
export const insertUserRights = ApiURL + "administrator/insertUserRights";
// Login Routes
export const getCompanyDetails = ApiURL + "auth/getCompanyDetails";
export const login = ApiURL + "auth/signin";

// Sales Module routes

export const TableResponse = ApiURL + "sales/TableResponse";
export const insertItemMaster = ApiURL + "sales/insertItemMaster";
export const updateItemMaster = ApiURL + "sales/updateItemMaster";

export const deleteTable = ApiURL + "deleteTable";
export const postBomMaster = ApiURL + "postBomMaster";
export const postBomDetail = ApiURL + "postBomDetail";
export const updateBomMaster = ApiURL + "updateBomMaster";

export const getInvoiceDetails = ApiURL + "getInvoiceDetails";
