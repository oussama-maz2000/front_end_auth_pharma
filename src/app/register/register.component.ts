import { Component, OnInit} from '@angular/core';
import { NgForm,FormBuilder, FormGroup, FormControl, Validators ,AbstractControl} from '@angular/forms';
import { Client } from './Client';
import { ServiceRegisterService } from './Services/service-register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

client:Client=new Client();
form!:FormGroup;

  constructor(private serviceRegister:ServiceRegisterService, private formBuilder:FormBuilder) {
    
   }

  ngOnInit(): void {
this.form=new FormGroup({
  first_name:new FormControl(null,Validators.required),
 last_name:new FormControl(null,Validators.required),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,Validators.required),
  confirme_password:new FormControl(null,Validators.required),
  pharmacy_name:new FormControl(null,Validators.required),
  employes:new FormControl(null),
  street:new FormControl(null),
  info:new FormControl(null),
  zipcode:new FormControl(null,Validators.required),
  willaya:new FormControl(null,Validators.required),
  phone:new FormControl(null,Validators.required),


})

    
    
    
    this.serviceRegister.getLocation().then(res=>{
      this.client.latitude=res.lat;
      this.client.longitude=res.lng;
    })

  }
 
  userRegister(){
//console.log(this.form)
console.log(this.client)


/* 
 this.serviceRegister.registerUser(this.client).subscribe(data=>{
      alert('successfully registration')
    },error=>{
      alert('try again ')}
    )*/ 
  } 



}
