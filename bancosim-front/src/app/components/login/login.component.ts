import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FinalUserService } from 'src/app/services/final-user.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup

  constructor(public formBuilder: FormBuilder, public http: HttpService, private userService: FinalUserService, private httpService: HttpClient) {
    this.formlogin = this.formBuilder.group(
      {
        identification: ['', Validators.required],
        password: ['', Validators.required],
        keepping: [false],
      }
    )
    // httpService.post('http://'+ environment.api + '/user/login',{
    //   idType: '01',
    //   identification: '1032484364',
    //   password: 'Alex123$'
    // }).subscribe(data=>console.log(data),err=>console.log(err))

    //http.apiGet("https://pokeapi.co/api/v2/pokemon/ditto")
  }


  ngOnInit() {

  }

  submit() {
    console.log(this.formlogin.controls['identification'].value);
    console.log(this.formlogin.controls['password'].value);
    this.userService.login(this.formlogin.controls['identification'].value, this.formlogin.controls['password'].value).subscribe(res => {
      console.log(res)
    });
  }

}
