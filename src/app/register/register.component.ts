import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from './Client';
import { ServiceRegisterService } from './Services/service-register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

client:Client=new Client();
  constructor(private serviceRegister:ServiceRegisterService) {
    
   }

  ngOnInit(): void {

    this.serviceRegister.getLocation().then(res=>{
      this.client.latitude=res.lat;
      this.client.longitude=res.lng;
    })
  }
  userRegister(form:NgForm){
 this.serviceRegister.registerUser(this.client).subscribe(data=>{
      alert('successfully registration')
    },error=>{
      alert('try again ')}
    
    
    ) 
    
    
  }



}
