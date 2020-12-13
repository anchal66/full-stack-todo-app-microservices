import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthService } from 'src/app/services/hardcoded-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: HardcodedAuthService, private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
    this.router.navigate([''])
  }
}
