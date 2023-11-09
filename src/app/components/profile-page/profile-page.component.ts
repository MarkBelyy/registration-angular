import { Component, OnInit } from '@angular/core';
import { UserProfile, UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  user: UserProfile | undefined;
  darkTheme = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUserProfile().subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }
}
