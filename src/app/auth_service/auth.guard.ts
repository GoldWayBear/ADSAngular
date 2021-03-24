import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService} from './token-storage.service';
import { Router } from '@angular/router';
import { Roles } from './roles.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private tokenStorage:TokenStorageService,
                private router: Router) { }


  /**
  * Get allowed user roles from the route.
  * @param {ActivatedRouteSnapshot} route - The route.
  * @returns {string[]} All user roles that are allowed to access the route.
  */

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const allowedUserRoles = this.getAllowedRolesFromRoutePermissions(route);
      if(this.checkCurrentUserPermission(allowedUserRoles)){
        console.log("Authorized!")
        return this.checkCurrentUserPermission(allowedUserRoles);
      }else{
        console.log("Not Authorized!")
        this.router.navigate(['/unauth']);
        return false;
      }

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const allowedUserRoles = this.getAllowedRolesFromRoutePermissions(childRoute);
      return this.checkCurrentUserPermission(allowedUserRoles);
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  private getAllowedRolesFromRoutePermissions(route: ActivatedRouteSnapshot): Roles[] {
    if (route.data && route.data.userRoles) {
      return route.data.userRoles as Roles[];
    }
    return [];
  }              

  private areCurrentUserRolesAllowed(currentUserRoles: string[], allowedUserRoles: Roles[]): boolean {
    for (const role of currentUserRoles) {
      for (const allowedRole of allowedUserRoles) {
        if (role.toLowerCase() === allowedRole.toLowerCase()) {
          return true;
        }
      }
    }
    return false;
  }

  private getCurrentUserRoles(): string[] {
    if (this.tokenStorage.getToken()) {
      let roles:string[] = [];
      roles = this.tokenStorage.getUser().roles;
      return roles;
    }
    return [];
  }

  private checkCurrentUserPermission(allowedUserRoles: Roles[]): boolean {
    if(!allowedUserRoles.length){
      //empty, all user are allowed
      return true;
    }else{
      let currentUserRoles = this.getCurrentUserRoles();
      if(!currentUserRoles.length){
        //empty
        this.router.navigate(['/login']);
        //this.router.navigateByUrl('/nopermission');
        return false;
      }else{
        if(this.areCurrentUserRolesAllowed(currentUserRoles, allowedUserRoles)){
          return true;
        }else{
          return false;
        }
      }
    }
  }  

}
