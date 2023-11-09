import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserProfile {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUserProfile(): Observable<UserProfile> {
    const url = 'https://randomuser.me/api/';

    return this.http.get(url).pipe(
      map((data: any) => {
        const user = data.results[0];
        return {
          name: {
            first: user.name.first,
            last: user.name.last,
          },
          email: user.email,
          picture: {
            large: user.picture.large,
            medium: user.picture.medium,
            thumbnail: user.picture.thumbnail,
          },
        };
      }),
    );
  }
}
