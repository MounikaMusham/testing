import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports:[ ReactiveFormsModule,
        MatDialogModule,
        HttpClientModule,
        RouterTestingModule ],
      providers:[
          {provide: MAT_DIALOG_DATA, useValue : {}},
          {
            provide: MatDialogRef,
            useValue: {}
          },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
 it('just check',()=>{
     expect(component.myname).toBe("mounika");
 })

 it('check for name requirement',()=>{
  component.userForm.controls['name'].setValue('');

  expect(component.userForm.valid).toBeFalsy();
})

it('check for email requirement',()=>{
  component.userForm.controls['email'].setValue('');

  expect(component.userForm.valid).toBeFalsy();
})

it('check for username requirement',()=>{
  component.userForm.controls['username'].setValue('');

  expect(component.userForm.valid).toBeFalsy();
})

it('check for id requirement',()=>{
  component.userForm.controls['id'].setValue('');

  expect(component.userForm.valid).toBeFalsy();
})

it('email-check',()=>{
  let email = component.userForm.controls['email'];
 
  email.setValue('123');
  expect(email.valid).toBeFalsy();
})

});
