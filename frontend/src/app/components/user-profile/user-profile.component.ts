import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  UserProfile!: User;

  constructor(private authService: AuthService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data
    })
  }

  ngOnInit(): void {
  }

}
