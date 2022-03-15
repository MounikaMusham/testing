import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [  {    provide: Router, useValue: routerSpy } ],
      imports: [
         ReactiveFormsModule,
         RouterTestingModule]
        
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  // beforeEach(()=>{
  //   component = new LoginComponent(new FormBuilder())
  // })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('checking all the fields',()=>{

    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      name:'',
      email:'',
      password:''
    }

    expect(loginFormGroup.value).toEqual(loginFormValues);
  })

it('check for name requirement',()=>{
  component.loginForm.controls['name'].setValue('');

  expect(component.loginForm.valid).toBeFalsy();
})

it('checking for minlength for name',()=>{
    let name = component.loginForm.controls['name'];
    name.setValue("mm");
    expect(name.valid).toBeFalsy();;
})

it('check email requirement',()=>{
    let email =component.loginForm.controls['email'];
    email.setValue('');
    expect(email.valid).toBeFalsy();
})


it('email-check',()=>{
  let email = component.loginForm.controls['email'];
 
  email.setValue('123');
  expect(email.valid).toBeFalsy();
})

it('should check for password requirement',()=>{
    let password = component.loginForm.controls['password'];
    password.setValue('abc')
    expect(password.valid).toBeFalsy();
})

it('password checking for minlength validity',()=>{
    let password = component.loginForm.controls['password'];
    password.setValue('abcef');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();

})

it('check form is valid or not by filling all fields',()=>{
    component.loginForm.controls['password'].setValue('admin');
    component.loginForm.controls['name'].setValue('mounika');
    component.loginForm.controls['email'].setValue('admin@gmail.com');

    expect(component.loginForm.valid).toBeTruthy();
})

it('check form is valid or not by filling one field with incorrect credentials fields',()=>{
    component.loginForm.controls['password'].setValue('ad');
    component.loginForm.controls['name'].setValue('mounika');
    component.loginForm.controls['email'].setValue('admin@gmail.com');

    expect(component.loginForm.valid).toBeFalsy();
})


it('should navigate to uselist', () =>  {

  let button = fixture.debugElement.nativeElement.querySelector('#log');
   button.click();

   fixture.detectChanges();
   

   fixture.whenStable().then(() => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/userlist']);
    });
  
  }); 



});
