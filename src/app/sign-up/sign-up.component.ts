import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email:string = ""
  user:string = ""

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`${this.user} have this email : ${this.email}`);
  }
}
