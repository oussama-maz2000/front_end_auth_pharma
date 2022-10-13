import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "../Client";
import { Observable, timeout } from "rxjs";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ServiceRegisterService {
  constructor(private http: HttpClient) {}

  postUrl = "http://localhost:8082/pharmacy/sign up";
  registerUser(user: Client): Observable<Object> {
    return this.http.post(`${this.postUrl}`, user);
  }

  matchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCntrl = control.get(source);
      const targetCntrl = control.get(target);
      return sourceCntrl &&
        targetCntrl &&
        sourceCntrl.value !== targetCntrl.value
        ? { mismatch: true }
        : null;
    };
  }
}
