import {Component, OnInit, Input, ViewChildren} from '@angular/core';
import {MOCKDB} from "../test-db/mockDb";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public inputEmail: string ="";
  public inputPassword: string ="";
  public register:boolean=false;
  public Db=MOCKDB;
// @ts-ignore
@ViewChildren(RegisterComponent)registerComponent;


  // @ts-ignore
  constructor() { }


  ngOnInit(): void {
    console.log(this.Db);

  }

  public login(){
    // @ts-ignore
    this.inputEmail=document.getElementById("inputEmail3").value;
    // @ts-ignore
    this.inputPassword=document.getElementById("inputPassword3").value;
    let isExist=false;
    this.Db.forEach(user=>{
      if (user.email == this.inputEmail && this.inputPassword == user.password){
          isExist=true;
      }

    })
    debugger;
    console.log(isExist ? "Wellcome" : "Not exist");


  }
  public newUser(){
    this.register=true;
  }

}
