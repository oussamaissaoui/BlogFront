import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private token: TokenService) { }
  state:any;

  ngOnInit(): void {

    let stt=this.token.isLoggedIn();
    this.state=stt;
    console.log(stt);
  }

}
