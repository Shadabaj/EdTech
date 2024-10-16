import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/Models/SignUp';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent {

  UserData: SignUp | undefined;
  userForm: FormGroup;
  role:string []= ["Admin" ,"User"]

  constructor(private fb: FormBuilder,private _authservice : AuthService, private _router:Router) 
  {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/),Validators.minLength(8),Validators.maxLength(20)]],
      confirmpassword: ['', [Validators.required, CompareValidator('password')]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^[789]\\d{9}$")]],
      role:['',Validators.required]
    });
  }

  SaveData() {
    console.log("Form validity:", this.userForm.valid);
    console.log("Form values:", this.userForm.value);
  
    if (this.userForm.valid) {
      const data = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        confirmpassword: this.userForm.value.confirmpassword,
        phoneNumber: this.userForm.value.phoneNumber,
        role: this.userForm.value.role
      };
  
      console.log("Data being sent: ", data);
      console.log(`The Role for the roles is ${data.role}`);
  
      this._authservice.UserSignUp(data).subscribe(
        res => {
          this._router.navigate(['/Login']);
        },
        error => {
          console.error("An error occurred:", error);
          console.error("Form is not valid. Errors: ", this.userForm.errors);
  
          Object.keys(this.userForm.controls).forEach(field => {
            const control = this.userForm.get(field);
            if (control?.errors) {
              console.log(`${field} errors:`, control.errors);
            }
          });
        }
      );
    } else {
      console.log("Form is invalid", this.userForm.errors);
      if (this.userForm.get('roles')?.value === '') {
        console.log('Role is required');
        return;
    }
    
    }
  }
  
  

}


function CompareValidator(otherControlName: string) {
  let thisControl: FormControl; // ConfirmPassword ko represent karta hai
  let otherControl: FormControl; // Password ko represent karta hai

  return (control: FormControl) => 
  {
      if (!control.parent)
      return null;

    thisControl = control; 
   otherControl=thisControl.parent?.get(otherControlName) as FormControl;

    otherControl.valueChanges.subscribe(() => {
      thisControl.updateValueAndValidity();
    });

    if (otherControl.value != thisControl.value) {
      return {
        matchValue: false 
      };
    }
    return null;
  }
}
