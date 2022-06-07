import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'toDApp para SD';

  email: string = 'gsl21@alu.ua.es'; //posar unos q estiguen en la meua bd
  password: string = '1234';

  constructor(public userService: UserService){ }

  displayName = '';

  ngOnInit(){
    this.login();
    this.userService.getUser().subscribe(
      user => {this.displayName = user.nombre //nombre per que en api-rest ho tinc aixina
    });
    console.log(this.displayName);
  }

  login(){
    const user = {email: this.email, password: this.password};
    //console.log(user);
    this.userService.signIn(user).subscribe(
      (loggedUser) => {
        this.userService.setToken(loggedUser.token);
        console.log("Login correcto");
        console.log(loggedUser.token);
      },
      (err) => {
        console.log("Error en el login");
        console.log(err);
      }
    );
  }
}