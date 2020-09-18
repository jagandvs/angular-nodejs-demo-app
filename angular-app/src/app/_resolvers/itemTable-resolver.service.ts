import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SalesTransactionsService } from '../sales/sales-transactions/sales-transactions.service'
@Injectable({
    providedIn: 'root'
})
export class ItemTableResolverService implements Resolve<any>{
    constructor(private service: SalesTransactionsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getItemTableResponse();
    }
}
