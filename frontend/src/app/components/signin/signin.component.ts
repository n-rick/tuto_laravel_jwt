import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (res) => {
        this.responseHandler(res);
      },
      (err) => {
        this.errors = err.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigateByUrl('profile');
      }
    );
  }

  responseHandler(data: any) {
    this.token.handleData(data.access_token);
    localStorage.setItem('userN', data.user.name);
  }

}
