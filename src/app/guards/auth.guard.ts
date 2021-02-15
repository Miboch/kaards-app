import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(false).pipe(tap(value => {
      if (!value) {
        this.router.navigate(["/login"])
      }
    }));
  }

}
