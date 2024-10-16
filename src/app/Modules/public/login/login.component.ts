import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private _authservice: AuthService, private router: Router) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  LoginUser() {
    if (this.userForm.valid) {
      this._authservice.ValidateUser(this.userForm.value).subscribe(res => {
        if (res.body != null) {

          const user: User = res.body
          this._authservice.SetAuthUser(user);
          if (user.roles.find(r => r == "Admin") == "Admin") {
            this.router.navigate(['/Admin']);
          }

          else if (user.roles.find(r => r == "User") == "User") {
            this.router.navigate(['/User']);
          }
        }
      });
    }
  }

  resetForm() {
    this.userForm.reset({
      username: '',
      password: ''
    });
  }

}
