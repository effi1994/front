import {Component, OnInit, ViewChildren} from '@angular/core';
import {MOCKDB} from "../test-db/mockDb";
import {LoginComponent} from "../login/login.component";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userEmail: string = "";
  public userPassword: string = "";
  public  userPhoneNumber : string ="";
  public userAddress: string = "";
  public userCity: string = "";
  public userCountry: string = "";
  public userZip: string = "";
  public  register:boolean=true;
  // @ts-ignore
 public mocDb=MOCKDB;
  // @ts-ignore
  @ViewChildren(LoginComponent)loginComponent;


  constructor() { }

  ngOnInit(): void {

  }

  public signup () {
    // @ts-ignore
    this.userEmail=document.getElementById("inputEmail").value;
    // @ts-ignore
    this.userPassword=document.getElementById("inputPassword").value;
    // @ts-ignore
    this.userPhoneNumber=document.getElementById("inputPhone").value;
    // @ts-ignore

    this.userAddress=document.getElementById("inputAddress").value;
    // @ts-ignore
      this.userCity=document.getElementById("inputCity").value;

    // @ts-ignore
      this.userCountry=document.getElementById("inputState").value;
    // @ts-ignore
    this.userZip=document.getElementById("inputZip").value;
    // @ts-ignore

    this.mocDb.push({email:this.userEmail,password:this.userPassword,
      phoneNumber:this.userPhoneNumber,
      address:this.userAddress,city:this.userCity,
      country:this.userCountry,zip:this.userZip})
    // @ts-ignore
    //MOCKDB=this.mocDb;
    this.loginComponent.register=false;
    debugger;


  }

}
