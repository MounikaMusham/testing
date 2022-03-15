import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';


describe('AppComponent', () => {
    let router: Router;
    let location: Location;
     const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([

            {path: '',component:LoginComponent},
            {path:'userlist', component:UserlistComponent}
        ])
      ],

      providers: [  {    provide: Router, useValue: routerSpy } ],
      declarations: [
        AppComponent,
        LoginComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router); 
    location = TestBed.get(Location);

    //router.initialNavigation();
  });

  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'material-CRUD'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('material-CRUD');
  });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('material-CRUD app is running!');
//   });

it('checking',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.myname).toBe("mouni");
});

it('Should navigate to login when path is empty', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const location: Location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });

//   it('should navigate to the login path',()=>{

//      const fixture = TestBed.createComponent(AppComponent);
//      const app = fixture.componentInstance;
//     // fixture.detectChanges();
//   })


});
