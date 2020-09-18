import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const ApiURL = environment.baseUrl;
export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const login = ApiURL + 'users/authenticate';
export const TableResponse = ApiURL + 'TableResponse';
export const deleteTable = ApiURL + 'deleteTable';
export const postBomMaster = ApiURL + 'postBomMaster';
export const postBomDetail = ApiURL + 'postBomDetail';
export const updateBomMaster = ApiURL + 'updateBomMaster';
export const insertItemMaster = ApiURL + 'insertItemMaster';
export const updateItemMaster = ApiURL + 'updateItemMaster';
export const getInvoiceDetails = ApiURL + 'getInvoiceDetails';

