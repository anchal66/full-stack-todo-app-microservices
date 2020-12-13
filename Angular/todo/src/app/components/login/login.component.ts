import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from 'src/app/services/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ="avinash";
  password = "";
  errMess = "Invalid Credential"
  invalidLogin = false

  constructor(private router:Router, private hard: HardcodedAuthService) { }

  ngOnInit(): void {
  }
  
  handleLogin(){
    if(this.hard.authtenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.router.navigate(['/welcome', this.username]);
    }
    else
      this.invalidLogin = true
  }

}
