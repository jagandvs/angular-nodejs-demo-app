import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BomserviceService } from '../bom/bom_service/bomservice.service';

@Injectable({
  providedIn: 'root'
})
export class UnitResolverService implements Resolve<any>{
  constructor(private bomservice: BomserviceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.bomservice.getUnitMaster();
  }
}
