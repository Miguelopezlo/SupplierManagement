import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formUserLogin!: FormGroup;

  private userAdmin = 'Miguel';
  private passAdmin = 123;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService){}

  ngOnInit() {
    this.formUserLogin = this.formBuilder.group({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });
  }

  handleClick(){
    let user: string = this.formUserLogin.value.user;
    let pass: number = parseInt(this.formUserLogin.value.pass);
    if(user === this.userAdmin && pass === this.passAdmin){
      console.log('Logueado')
      this.authService.login('admin');
      this.router.navigate(['home/suppliers']);
      return;
    } 
    // alert('user or password incorrect');
  }

}
