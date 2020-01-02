import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class IdentityGuard implements CanActivate{

	constructor(
		private _userService: UserService,
		private _router: Router
	){

	}

	canActivate(){//Este método de la clase es el que realmente comprueba algo
		let identity = this._userService.getIdentity();

		if(identity){
			return true;
		}else{
			this._router.navigate(['/login']);
			return false;
		}
	}
}