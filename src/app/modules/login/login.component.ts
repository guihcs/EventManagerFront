import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  logging = false;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }


  async login(){
    this.logging = true;
    let loginData = {
      email: this.emailControl.value,
      password: this.passwordControl.value
    };

    if (await this.auth.login(loginData)){
      this.close();
      let profile = this.auth.getProfile();
      if (profile.type == 'admin'){
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['customer']);
      }

    }else {
      this.logging = false;
    }

  }

  close(){
    this.dialogRef.close();
  }

}
