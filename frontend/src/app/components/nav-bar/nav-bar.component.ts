import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isSignedIn!: boolean;
  userN: string | null = localStorage.getItem('userN');

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
    localStorage.removeItem('userN');
    this.router.navigateByUrl('login');
  }
}
