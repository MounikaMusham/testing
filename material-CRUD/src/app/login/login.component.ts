import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  componentName ="hello";

  loginForm! : FormGroup;
  passwordType: string ='password';
  passwordShown: boolean = false;
  name:any;

  constructor(private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      name :['',[ Validators.required, Validators.minLength(3)]],
      email : ['',[Validators.required,
                  Validators.email ]
              ],
      password : ['',[ Validators.required,
                      Validators.minLength(5)]
                 ]

     
    });

  }

  login(){

    if(this.loginForm.value.name == 'mounika' && this.loginForm.value.email == 'mounika@gmail.com' && this.loginForm.value.password == 12345 ||
    this.loginForm.value.name == 'admin' && this.loginForm.value.email == 'admin@gmail.com' && this.loginForm.value.password == 'admin'
    ){
      this.authentication(this.name);
      this.router.navigate(['/userlist']);
    }else{
         
      alert('invalid credentials');
    }
   
  }

togglePassword(){
  if(this.passwordShown){
    this.passwordShown = false;
    this.passwordType ='password';
  }else{
    this.passwordShown= true;
    this.passwordType = 'text';
  }
}

authentication(name:any){
  sessionStorage.setItem('user',this.loginForm.value.name);
  if(this.loginForm.value.name == 'admin'){
     this.router.navigate(['/userlist']);

  }else{
    alert('you do not have access to userlist');
  }

}

}
