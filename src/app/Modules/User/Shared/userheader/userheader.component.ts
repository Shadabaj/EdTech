import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styles: [
  ]
})
export class UserheaderComponent {

  user:User | undefined;

  constructor(private _authservice: AuthService, private _router: Router) {
    this.user = _authservice.user;
  }


  SignOut() {
    this._authservice.RemoveAuthUser();
    this.user = undefined;
    this._router.navigate(['/Login']);
  }

}
