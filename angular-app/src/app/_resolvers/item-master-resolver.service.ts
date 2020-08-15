import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ITEM_MASTER } from '../model/ITEM_MASTER';
import { BomserviceService } from '../bom/bom_service/bomservice.service';

@Injectable({
  providedIn: 'root'
})
export class ItemMasterResolverService implements Resolve<any>{

  constructor(private bomservice: BomserviceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.bomservice.getItemMaster();
  }
}
