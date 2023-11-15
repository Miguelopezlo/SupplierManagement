import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})

export class LoginComponent implements OnInit {

  public formUserLogin!: FormGroup;

  private userAdmin = 'Miguel';
  private passAdmin = 123;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private messageService: MessageService){}

/**
 * The ngOnInit function initializes a form for user login with two fields, "user" and "pass", and sets
 * them as required fields.
 */
  ngOnInit() {
    this.formUserLogin = this.formBuilder.group({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });
  }

/**
 * The handleClick function checks if the user and password entered match the admin credentials, and if
 * so, logs in the user as an admin and navigates to the suppliers page.
 * @returns In the code snippet provided, the function `handleClick()` returns nothing (`undefined`).
 */
  handleClick(){
    let user: string = this.formUserLogin.value.user;
    let pass: number = parseInt(this.formUserLogin.value.pass);
    if(user === this.userAdmin && pass === this.passAdmin){
      console.log('Logueado')
      this.authService.login('admin');
      this.router.navigate(['home/suppliers']);
      return;
    } 
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Usuario o contraseña incorrecta' });
  }

}
