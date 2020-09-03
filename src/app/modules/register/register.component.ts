import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nameControl = new FormControl('');
  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  logging = false;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }


  async register(){
    this.logging = true;
    let loginData = {
      name: this.nameControl.value,
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
