import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BomserviceService } from '../bom/bom_service/bomservice.service';
import { BOM_MASTER } from '../model/BOM_MASTER';

@Injectable({
  providedIn: 'root'
})
export class BomMasterResolverService implements Resolve<any>{

  constructor(private bomservice: BomserviceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.bomservice.getBomMaster();
  }
}
