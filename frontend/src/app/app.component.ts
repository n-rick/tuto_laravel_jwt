import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from './shared/auth-state.service';
import { TokenService } from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  isSignedIn!: boolean;

  constructor(
    private auth: AuthStateService,
    private router: Router,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      // console.log(val);
      this.isSignedIn = val;
    });
  }

  // Déconnexion
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigateByUrl('login');
  }
}
