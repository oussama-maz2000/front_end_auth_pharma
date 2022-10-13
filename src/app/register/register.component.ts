import { Component, OnInit } from "@angular/core";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { Client } from "./Client";
import { ServiceRegisterService } from "./Services/service-register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  client: Client = new Client();
  form!: FormGroup;

  constructor(
    private serviceRegister: ServiceRegisterService,

  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      fname: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,


      ]),
      confirmePassword: new FormControl('', Validators.required),
      pharmaName: new FormControl('', Validators.required),
      employees: new FormControl(''),
      address: new FormControl('',Validators.required),
      willaya: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    }
    ,
    [this.serviceRegister.matchValidator('password','confirmePassword')]);
  
this.getlocation();

  }

  getlocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       this.client.longitude = position.coords.longitude;
        this.client.latitude = position.coords.latitude;
        
      },
      function errorCallback(error) {
      },
      {
        timeout: 5000,
      }
    );
    
  }
  userRegister() {
     if (this.form.valid == true) {
      this.serviceRegister.registerUser(this.client).subscribe((data) => {
        console.log(this.client);
        alert("successfully registration");
      });
    }
    if (this.form.invalid == true ) {
      alert("complete your form or check your password");
    } 
    console.log( this.form)
   
  }
}
