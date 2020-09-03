import { Injectable } from '@angular/core';
import {UserProfile} from '../../models/user.profile';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  async login(loginData): Promise<boolean>{

    let profile:any = this.http.post('', loginData).toPromise();
    sessionStorage.setItem("profile", profile.data);
    return profile.status;
  }

  async sign(signData): Promise<boolean>{
    let profile:any = this.http.post('', signData).toPromise();
    sessionStorage.setItem("profile", profile.data);
    return profile.status;
  }

  getProfile(): any{
    return sessionStorage.getItem("profile");
  }

  logout(){
    sessionStorage.clear();
  }


}
