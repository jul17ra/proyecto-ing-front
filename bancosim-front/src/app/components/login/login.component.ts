import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup
  public email: AbstractControl
  public password: AbstractControl
  public mantener: boolean = false

  constructor(
    public formBuilder: FormBuilder,
    public http:HttpService
  ) { 
    this.formlogin = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
        mantener :[''],
      }
    )
    this.email = this.formlogin.controls['email']
    this.password = this.formlogin.controls['password']

    http.apiget("https://pokeapi.co/api/v2/pokemon/ditto")
  }
  

  ngOnInit(): void {
  }

}
