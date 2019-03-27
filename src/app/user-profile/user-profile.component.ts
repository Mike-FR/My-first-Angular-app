import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Spennato',
    firstName : 'Mickael',
    age : 31,
    quote : "J'aime coder en Angular",
    photo : 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Kratos_PS4.jpg/234px-Kratos_PS4.jpg'
  };

  show: boolean = true
  buttonName: any = "Hide age"

  constructor() { }

  toggle() {
    this.show = !this.show

    if(this.show)
      this.buttonName = "Hide age";
    else
      this.buttonName = "Show age";
  }

  ngOnInit() {
  }

}
